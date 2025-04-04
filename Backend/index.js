const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const { SiweMessage } = require('siwe');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(session({
  name: 'nuzi.sid',
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/accounts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Schemas
const walletSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  nonce: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date }
});

const Wallet = mongoose.model('Wallet', walletSchema);

// Generate Nonce
function generateNonce() {
  return ethers.hexlify(ethers.randomBytes(32));
}

// Endpoints
app.get('/nonce', async (req, res) => {
  if (!req.session.nonce) {
    req.session.nonce = generateNonce();
  }
  res.status(200).json({ nonce: req.session.nonce });
});

app.post('/verify', async (req, res) => {
  try {
    if (!req.body.message || !req.body.signature) {
      return res.status(400).json({ message: 'Missing message or signature' });
    }

    const siweMessage = new SiweMessage(req.body.message);
    const fields = await siweMessage.validate(req.body.signature);

    if (fields.nonce !== req.session.nonce) {
      return res.status(400).json({ message: 'Invalid nonce' });
    }

    req.session.siwe = fields;
    req.session.nonce = null;
    
    // Update or create wallet in database
    const wallet = await Wallet.findOneAndUpdate(
      { address: fields.address.toLowerCase() },
      { 
        address: fields.address.toLowerCase(),
        nonce: generateNonce(),
        lastLogin: new Date()
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ 
      message: 'Successfully authenticated',
      address: fields.address
    });
  } catch (error) {
    req.session.siwe = null;
    req.session.nonce = null;
    console.error('Error during verification:', error);
    res.status(500).json({ message: 'Error verifying signature' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'Logged out successfully' });
});

// Protected route example
app.get('/user', async (req, res) => {
  if (!req.session.siwe) {
    return res.status(401).json({ message: 'You have to first sign_in' });
  }

  try {
    const wallet = await Wallet.findOne({ address: req.session.siwe.address.toLowerCase() });
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    res.json({
      address: wallet.address,
      lastLogin: wallet.lastLogin,
      createdAt: wallet.createdAt
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
