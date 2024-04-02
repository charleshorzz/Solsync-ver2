import React, { useState } from "react";
import { MdDone } from "react-icons/md";

const RegisterPage = () => {
  const [verificationCompleted, setVerificationCompleted] = useState(false);

  const handleVerificationCompletion = () => {
    setVerificationCompleted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rectangle bg-white shadow-2xl relative">
        <div className="text-3xl font-bold mt-8 ml-5">Register Ngoh.sol</div>
        <div className="mt-20 text-2xl text-center">
          Enter your wallet address
        </div>
        <div className="mt-4 w-3/4 mx-auto relative">
          <input
            className="bg-black shadow-xl rounded-lg w-full h-10 text-white text-center"
            placeholder="Your wallet address"
          />
          {verificationCompleted && (
            <MdDone className="absolute top-1/2 transform -translate-y-1/2 right-5 text-green-500" />
          )}
        </div>
        <div className="mt-4 flex justify-center text-red-500 underline">
          <button onClick={handleVerificationCompletion}>
            Complete the verification
          </button>
        </div>
        <div className="absolute bottom-4 w-full text-center">
          <div className="text-black-300">
            Note: One-time transaction for registration
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
