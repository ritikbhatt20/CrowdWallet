import { useEffect, useState } from "react";
import Link from 'next/link'; // Import Link from next
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

// import { useEffect, useState } from "react";
// import Link from 'next/link'; // Import Link from next
// import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
// import { useRouter } from 'next/router'; // Import useRouter hook

// import style from "../styles/Header.module.css";
// import { useWallet } from "@/context/WalletContext"; // Import the wallet context hook

// const DynamicWalletMultiButton = dynamic(
//   () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
//   { ssr: false } // Disable SSR for WalletMultiButton
// );

// const Header = () => {
//   const router = useRouter(); // Get the router object
//   const { connected, disconnectWallet } = useWallet(); // Get the wallet context

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // Set isClient to true when component mounts on the client-side
//   }, []);

//   return (
//     <div className={style.wrapper}>
//       <div className={style.title}>CrowdWallet Funding DAPP💸</div>
//       <div className={style.navLinks}>
//         <Link legacyBehavior href="/create-project">
//           <a className={router.pathname === '/create-project' ? style.activeLink : ''}>Create Project</a>
//         </Link>
//         <Link legacyBehavior href="/project-details">
//           <a className={router.pathname === '/project-details' ? style.activeLink : ''}>Project Details</a>
//         </Link>
//         <Link legacyBehavior href="/contribute">
//           <a className={router.pathname === '/contribute' ? style.activeLink : ''}>Contribute</a>
//         </Link>
//         <Link legacyBehavior href="/claim">
//           <a className={router.pathname === '/claim' ? style.activeLink : ''}>Claim</a>
//         </Link>
//       </div>
//       {isClient && <DynamicWalletMultiButton />}
//       {connected && <button onClick={disconnectWallet}>Disconnect Wallet</button>}
//     </div>
//   );
// };

// export default Header;


