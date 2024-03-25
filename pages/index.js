import { useMemo } from "react";  //react hook
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

import Header from "@/components/Header";
import ProjectForm from "@/components/ProjectForm";
import ContributionForm from "@/components/ContributionForm";
import ProjectDetails from "@/components/ProjectDetails";
import ClaimFundsButton from "@/components/ClaimFundsButton";
import Footer from "@/components/Footer";
import style from "../styles/Home.module.css";

export default function Home() {
  const endpoint = "https://fluent-little-sun.solana-devnet.quiknode.pro/371c43da2c0c0ea39a2d68d940b83d1c7a0a05b5/";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Header />
            <div className={style.container}>
              <ProjectForm />
              <ProjectDetails project={{ fundingGoal: 10000, deadline: "2024-12-31", totalFunded: 5000, claimedFund: false }} />
              <ContributionForm />
              <ClaimFundsButton onClick={() => console.log("Funds claimed!")} />
            </div>
          <Footer />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
);
}