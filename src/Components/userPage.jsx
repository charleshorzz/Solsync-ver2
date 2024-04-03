import React, { useState } from "react";
import { GoCopy } from "react-icons/go";
import { TbLocationShare } from "react-icons/tb";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

function UserPage() {
  const shortenAddress = (address, firstChars = 6, lastChars = 4) => {
    if (address.length <= firstChars + lastChars) {
      return address;
    }
    return `${address.slice(0, firstChars)}...${address.slice(-lastChars)}`;
  };

  const walletAddress = "kcK7Zet1Jq8oeozAJsb3S8t2t1odNaSJnmFtsc17e4P";

  const [copied, setCopied] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-end">
        <div className="mr-4 mb-3 text-lg text-blue-700 flex items-center">
          <a href={`https://solscan.io/account/${walletAddress}`}>Solscan</a>
          <TbLocationShare className="ml-1" />
          <button className="ml-6">TipLink</button>
          <TbLocationShare className="ml-1" />
        </div>
        <div className="rectangle bg-white relative mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="absolute w-full h-1/6 bg-gradient-to-r from-violet-600 to-blue-400"></div>
          <div className="h-28 w-28 rounded-full flex justify-center items-center ml-8">
            <img
              src="/2862666.jpg"
              className="rounded-full h-full w-full mt-12 z-10"
            />
          </div>
          <div className="font-bold text-2xl mt-8 ml-9">Ngoh.sol</div>
          <hr className="border-t border-gray-300 w-full mx-auto mt-8" />
          <div className="smRectangle mt-10 ml-8">
            <div className="font-bold text-lg">Wallet Address</div>

            <div className="bg-black text-white mt-3 rounded-lg flex items-center">
              <img src="/solana.png" className="w-9 h-9 ml-2" />
              <CopyToClipboard
                text={walletAddress}
                onCopy={() => setCopied(true)}
              >
                <button className="ml-3">
                  {shortenAddress(walletAddress)}
                </button>
              </CopyToClipboard>
              <button className="ml-5">
                {copied ? <MdOutlineDone /> : <GoCopy />}
              </button>
            </div>
          </div>
          <div className="smRectangle mt-6 ml-8">
            <div className="font-bold text-lg">Ownership</div>
            <div className="bg-black text-white mt-3 rounded-lg">
              <span className="ml-2 w-full h-9 overflow-hidden flex items-center">
                <span className="opacity-80">expiry</span>&nbsp; November 10,
                2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
