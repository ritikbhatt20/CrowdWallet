import Header from "@/components/Header";

import { useMemo } from "react";  //react hook
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

import style from "../styles/Home.module.css";

export default function Home() {
  const endpoint = "https://fluent-little-sun.solana-devnet.quiknode.pro/371c43da2c0c0ea39a2d68d940b83d1c7a0a05b5/";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
            <div className={style.wrapper}>
              <Header />
             </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
);
}