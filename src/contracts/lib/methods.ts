import { Program } from "@project-serum/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { PresaleProgram } from "../presale_program";
import { PublicKey, Transaction } from "@solana/web3.js";
import { buyTokensInstruction } from "./instructions";

export const callBuyTokens = async (
  wallet: WalletContextState,
  program: Program<PresaleProgram>,
  presale: PublicKey,
  paymentWallet: PublicKey,
  priceFeed: PublicKey,
  amount: number,
) => {
  if (!wallet.publicKey) return;
  try {
    const transaction = new Transaction();

    transaction.add(
      await buyTokensInstruction(program, presale, wallet.publicKey, paymentWallet, priceFeed, amount)
    );

    const txSignature = await wallet.sendTransaction(transaction, program.provider.connection, { skipPreflight: true });
    await program.provider.connection.confirmTransaction(txSignature, "confirmed");
    return txSignature;
  } catch (error) {
    console.log(error);
    return;
  }
}