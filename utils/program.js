import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

import IDL from "./idl.json"

import { PROJECT_SEED, PROGRAM_ID } from "./constants";

export const getProgram = (connection, wallet) => {
    const provider = new AnchorProvider(connection, wallet, {
      commitment: "confirmed",                                    
    });
    const program = new Program(IDL, PROGRAM_ID, provider);     
    return program;                                         
};  

export const getProjectAddress = async() => {
    return (
        await PublicKey.findProgramAddress([Buffer.from(PROJECT_SEED)], PROGRAM_ID)
    )[0];
}
