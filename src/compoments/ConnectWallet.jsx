import "./ConnectWallet.css"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage, useDisconnect } from 'wagmi';
import { useState, useEffect, useCallback } from 'react';
import { SiweMessage } from 'siwe';

function ConnectWalletBTN() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasAttemptedSign, setHasAttemptedSign] = useState(false);

  const handleSignIn = useCallback(async () => {
    if (!isConnected || !address || isAuthenticating || hasAttemptedSign) {
      return;
    }
    
    try {
      setIsAuthenticating(true);
      setHasAttemptedSign(true);
      
      if (!signMessageAsync) {
        throw new Error('signMessageAsync is not available');
      }

      // Get nonce first
      const nonce = await fetch('http://localhost:3000/nonce', {
        credentials: 'include'
      }).then(res => res.json());

      // Create message
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to Nuzi Verse',
        uri: window.location.origin,
        version: '1',
        chainId: 1,
        nonce: nonce.nonce
      });

      const messageToSign = message.prepareMessage();

      // Sign message
      const signature = await signMessageAsync({ message: messageToSign });

      // Verify signature
      const response = await fetch('http://localhost:3000/verify', {
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
      
      if (data.message === 'Successfully authenticated') {
        // Save authentication state in localStorage
        localStorage.setItem('walletAuth', JSON.stringify({
          address,
          signature,
          message: messageToSign,
          timestamp: Date.now()
        }));
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Clear any existing auth data on failure
      localStorage.removeItem('walletAuth');
      disconnect(); // Disconnect on error
    } finally {
      setIsAuthenticating(false);
    }
  }, [isConnected, address, signMessageAsync, disconnect, isAuthenticating, hasAttemptedSign]);

  const handleDisconnect = useCallback(() => {
    disconnect();
    localStorage.removeItem('walletAuth');
    setHasAttemptedSign(false);
  }, [disconnect]);

  // Initialize component
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Handle automatic sign-in after connection
  useEffect(() => {
    if (isInitialized && isConnected && address && !isAuthenticating && !hasAttemptedSign) {
      const authData = localStorage.getItem('walletAuth');
      const isAuthenticated = authData && JSON.parse(authData).address === address;
      
      if (!isAuthenticated) {
        handleSignIn();
      }
    }
  }, [isConnected, address, isInitialized, isAuthenticating, hasAttemptedSign, handleSignIn]);

  if (!isInitialized) {
    return (
      <button className="px-3 py-1 rounded connectBtn" disabled>
        Loading...
      </button>
    );
  }

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button 
                    className="px-3 py-1 rounded connectBtn" 
                    onClick={openConnectModal} 
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="px-3 py-1 rounded connectBtn">
                    Wrong network
                  </button>
                );
              }

              // Check if user is already authenticated
              const authData = localStorage.getItem('walletAuth');
              const isAuthenticated = authData && JSON.parse(authData).address === account.address;

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button 
                    className="px-3 py-1 rounded connectBtn" 
                    onClick={isAuthenticated ? handleDisconnect : openConnectModal} 
                    type="button"
                    disabled={isAuthenticating}
                  >
                    {isAuthenticating ? 'Signing...' : 
                     isAuthenticated ? account.displayName : 'Connect Wallet'}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectWalletBTN;

