import { BN, Program } from "@project-serum/anchor";
import { PresaleProgram } from "../presale_program";
import { PublicKey, SystemProgram } from "@solana/web3.js";

export const buyTokensInstruction = async (
  program: Program<PresaleProgram>, 
  presale: PublicKey,
  buyer: PublicKey,
  paymentWallet: PublicKey,
  priceFeed: PublicKey,
  amount: number
) => {
  return await program.methods
    .buyTokens(new BN(amount))
    .accounts({
      presale,
      buyer,
      paymentWallet,
      priceFeed,
      systemProgram: SystemProgram.programId,
    })
    .instruction();
}