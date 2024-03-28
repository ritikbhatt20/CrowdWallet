import { createContext, useContext, useMemo, useEffect, useState } from "react";
import { SystemProgram } from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

import { getProgram, getProjectAddress } from "@/utils/program";
import { confirmTx, mockWallet } from "@/utils/helper";
import toast from "react-hot-toast";

const anchor = require("@project-serum/anchor");

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);
  const [projectAddress, setProjectAddress] = useState(null);
  const [projectHistory, setProjectHistory] = useState([]);
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  const program = useMemo(() => {
    if (connection) {
      return getProgram(connection, wallet ?? mockWallet());
    }
  }, [connection, wallet]);

  useEffect(() => {
    if (!program) return;
    fetchProjectData();
    getProjectHistory();
  }, [program]);

  const fetchProjectData = async () => {
    try {
      if (!projectAddress) {
        const address = await getProjectAddress();
        setProjectAddress(address);
        return;
      }
      const data = await program.account.project.fetch(projectAddress);
      setProjectData(data);
      console.log(data);
      getProjectHistory()
    } catch (error) {
      console.error("Error fetching project data:", error);
      toast.error("Failed to fetch project data");
    }
  };

  const initializeProject = async (fundingGoal, deadline) => {
    try {
      if (!projectAddress) {
        const address = await getProjectAddress();
        setProjectAddress(address);
      }
      const fundGoal = new anchor.BN(fundingGoal);
      const deadl = new anchor.BN(deadline);
      const txHash = await program.methods
        .initializeProject(fundGoal, deadl)
        .accounts({
          project: projectAddress,
          owner: wallet?.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      await confirmTx(txHash, connection);

      fetchProjectData();
      toast.success("Project initialized successfully!");
    } catch (err) {
      console.error("Error initializing project:", err);
      toast.error("Failed to initialize project");
    }
  };

  const getProjectHistory = async () => {
    const history = [];
    for (let i = 1; i <= 1; i++) {
      const projectAddress = await getProjectAddress(); // Assuming getProjectAddress returns the address for a given project ID
      if (projectData) break;

      const project = await program.account.project.fetch(projectAddress);

      history.push({
        fundingGoal: project.fundingGoal.words[0],
        deadline: project.deadline.words[0],
        totalFunded: project.totalFunded.words[0],
        claimedFund: project.claimedFund,
      });
    }

    console.log(history, "PROJECT HISTORY");
    setProjectHistory(history);
  };

  const contribute = async (amount) => {
    try {
      if (!projectData) {
        console.log("There is no Project");
        return;
      }
      const am = new anchor.BN(amount);
      const txHash = await program.methods
        .contribute(am)
        .accounts({
          contributor: wallet.publicKey,
          project: projectAddress,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      await confirmTx(txHash, connection);

      fetchProjectData();
      toast.success("Contributed successfully!");
    } catch (err) {
      console.error("Error in Contributing to project:", err);
      toast.error("Failed to Contribute");
    }
  };

  const claimFunds = async () => {
    try {
      const txHash = await program.methods
        .claimFunds()
        .accounts({
          project: projectAddress,
          owner: wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      await confirmTx(txHash, connection);

      fetchProjectData();
      toast.success("Claimed the Funds!");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        program,
        projectData,
        initializeProject,
        projectHistory,
        contribute,
        claimFunds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
