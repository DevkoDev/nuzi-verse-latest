import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function SignIn() {
  const { isConnected } = useAccount();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <h2 className="mb-4">Welcome to Nuzi Verse</h2>
      {!isConnected ? (
        <div className="text-center">
          <p className="mb-4">Connect your wallet to get started</p>
          <ConnectButton />
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">You're connected! Ready to explore Nuzi Verse.</p>
          <ConnectButton />
        </div>
      )}
    </div>
  );
} 