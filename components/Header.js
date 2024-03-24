import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

import style from "../styles/Header.module.css";

const DynamicWalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false } // Disable SSR for WalletMultiButton
);

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client-side
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>CrowdWallet Funding DAPP💸</div>
      {isClient && <DynamicWalletMultiButton />} {/* Render WalletMultiButton only on the client-side */}
    </div>
  );
};

export default Header;

