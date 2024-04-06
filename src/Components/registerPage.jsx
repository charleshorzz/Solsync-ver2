import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSmallScreen from "../hooks/resizeScreen";
import { useParams } from "react-router-dom";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import {
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

const RegisterPage = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const { name: username } = useParams();
  const targetWalletAddress = "7EF3S6iff1GYh8ccTcgNTcP75Gyk7Wpn8Jo3ByH1ABPg";

  const isSmallScreen = useSmallScreen();

  const [name, setName] = useState("");
  const qrCode = "random qr";

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      if (!publicKey) throw new WalletNotConnectedError();

      const targetAddressKey = new PublicKey(targetWalletAddress);
      console.log(targetAddressKey);

      const floatAmount = parseFloat(0.01);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: targetAddressKey,
          lamports: LAMPORTS_PER_SOL * floatAmount,
        })
      );

      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, "processed");
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-2xl relative">
        {isSmallScreen ? (
          <div className="smScreenRec bg-white shadow-2xl flex flex-col justify-center items-center relative">
            <div className="text-2xl font-bold mb-10">Register {username}</div>

            <div className="bg-gray-200 shadow-xl rounded-lg w-3/4 h-10 flex justify-center items-center mb-10">
              Transaction Fee&nbsp;<span className="text-red-500">0.01</span>
              &nbsp;sol
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12"
              onClick={submitHandler}
            >
              Register
            </button>
            <div className="absolute bottom-4 text-black-300 text-center">
              Note: One-time transaction for registration
            </div>
          </div>
        ) : (
          <div className="rectangle bg-white shadow-2xl flex flex-col justify-center items-center relative">
            <div className="text-3xl font-bold mb-10">Register {username}</div>
            <div className="bg-gray-200 shadow-xl rounded-lg w-3/4 h-10 flex justify-center items-center mb-10">
              <div className="font-bold">
                Transaction Fee&nbsp;<span className="text-red-500">0.01</span>
                &nbsp;sol
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-12"
              onClick={submitHandler}
            >
              Register
            </button>
            <div className="absolute bottom-4 text-black-300">
              Note: One-time transaction for registration
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
