const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/accounts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());

const walletSchema = new mongoose.Schema({
    address: { type: String, required: true, unique: true }
});

const Wallet = mongoose.model('Wallet', walletSchema);

app.post('/login', async (req, res) => {
    const { address } = req.body;

    try {
        const existingWallet = await Wallet.findOne({ address });
        if (existingWallet) {
            return res.status(400).json({ message: 'Wallet already exists' });
        }

        const newWallet = new Wallet({ address });
        await newWallet.save();
        res.status(201).json({ message: 'Wallet added successfully' });

    } catch (error) {
        console.error('Error adding wallet:', error);
        res.status(500).json({ message: 'Error occurred while adding the wallet' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
