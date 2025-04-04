import { SiweMessage } from 'siwe';

const API_URL = 'http://localhost:3000';

export async function getNonce() {
  try {
    const response = await fetch(`${API_URL}/nonce`, {
      credentials: 'include'
    });
    const data = await response.json();
    console.log('Nonce received:', data.nonce);
    return data.nonce;
  } catch (error) {
    console.error('Error getting nonce:', error);
    throw error;
  }
}

export async function signInWithEthereum(address, signMessage) {
  try {
    console.log('Starting sign in process for address:', address);
    const nonce = await getNonce();
    console.log('Creating SIWE message with nonce:', nonce);
    
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to Nuzi Verse',
      uri: window.location.origin,
      version: '1',
      chainId: 1,
      nonce
    });

    console.log('Preparing message for signing');
    const messageToSign = message.prepareMessage();
    console.log('Message to sign:', messageToSign);

    console.log('Requesting signature');
    const signature = await signMessage(messageToSign);
    console.log('Received signature:', signature);

    console.log('Sending verification request');
    const response = await fetch(`${API_URL}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        message: messageToSign,
        signature
      })
    });

    const data = await response.json();
    console.log('Verification response:', data);
    return data;
  } catch (error) {
    console.error('Detailed error during sign in:', {
      error,
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
}

export async function getUser() {
  try {
    const response = await fetch(`${API_URL}/user`, {
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
} 