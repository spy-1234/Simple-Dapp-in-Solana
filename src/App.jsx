import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { AirDrop } from "./components/AirDrop";
import { UserBalance } from "./components/UserBalance";
import { SignMessage } from "./components/SignMessage";
import { SendToken } from "./components/SendToken";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/f9Bdo4tuQo-zxOhEQkshyBdJq6sNbupi"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>Hi baby!</div>
          <AirDrop />
          <UserBalance />
          <SignMessage />
          <SendToken />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
