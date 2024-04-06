import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { Audio } from "react-loader-spinner";
import { toast } from "react-toastify";
import useSmallScreen from "../hooks/resizeScreen";

const RegisterPage = () => {
  const isSmallScreen = useSmallScreen();

  const [name, setName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const qrCode = "random qr";

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, walletAddress }).unwrap();
      toast.success("Registration successful !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(`/user/${name}`);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="shadow-2xl relative" onSubmit={submitHandler}>
        {isSmallScreen ? (
          <div className="smScreenRec bg-white shadow-2xl flex flex-col justify-center items-center relative">
            <div className="text-2xl font-bold mb-10">Register Ngoh.sol</div>
            <div className="bg-gray-200 shadow-xl rounded-lg w-3/4 h-10 flex justify-center items-center mb-10">
              Transaction Fee&nbsp;<span className="text-red-500">0.01</span>
              &nbsp;sol
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12">
              Register
            </button>
            <div className="absolute bottom-4 text-black-300 text-center">
              Note: One-time transaction for registration
            </div>
          </div>
        ) : (
          <div className="rectangle bg-white shadow-2xl flex flex-col justify-center items-center relative">
            <div className="text-3xl font-bold mb-10">Register Ngoh.sol</div>
            <div className="bg-gray-200 shadow-xl rounded-lg w-3/4 h-10 flex justify-center items-center mb-10">
              <div className="font-bold">
                Transaction Fee&nbsp;<span className="text-red-500">0.01</span>
                &nbsp;sol
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-12">
              Register
            </button>
            <div className="absolute bottom-4 text-black-300">
              Note: One-time transaction for registration
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
