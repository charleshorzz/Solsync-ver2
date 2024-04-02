import React, { useState } from "react";
import { GoCopy } from "react-icons/go";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineDone } from "react-icons/md";

const AuthenticatePage = () => {
  const walletAddress = "kcK7Zet1Jq8oeozAJsb3S8t2t1odNaSJnmFtsc17e4P";

  const [copied, setCopied] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rectangle bg-white shadow-2xl relative flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <div className="text-lg font-bold">
            Send <span className="text-red-500">0.01</span> sol for verification
          </div>
          <div className="mt-10 bg-gray-300 rounded-lg p-3">
            <CopyToClipboard
              text={walletAddress}
              onCopy={() => setCopied(true)}
            >
              <button>{walletAddress}</button>
            </CopyToClipboard>
            <button className="ml-3">
              {copied ? (
                <MdOutlineDone className="text-green-700" />
              ) : (
                <GoCopy />
              )}
            </button>
          </div>
        </div>
        <button className="bg-violet-300 px-4 py-2 rounded-lg absolute bottom-20">
          Connect
        </button>
      </div>
    </div>
  );
};

export default AuthenticatePage;
