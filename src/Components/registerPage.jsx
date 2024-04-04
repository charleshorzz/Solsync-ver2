import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { Audio } from "react-loader-spinner";
import { toast } from "react-toastify";

const RegisterPage = () => {
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
      <form className="rectangle shadow-2xl relative" onSubmit={submitHandler}>
        <div className="text-3xl font-bold mt-8 ml-5">Register Ngoh.sol</div>
        <label className="mt-20 text-2xl text-center">
          Enter your username
        </label>
        <div className="mt-10 w-3/4 mx-auto relative">
          <input
            className="bg-gray-200 shadow-xl rounded-lg w-full h-10 text-center"
            placeholder="Your username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label className="mt-20 text-2xl text-center">
          Enter your wallet address
        </label>
        <div className="mt-10 w-3/4 mx-auto relative">
          <input
            className="bg-gray-200 shadow-xl rounded-lg w-full h-10 text-center"
            placeholder="Your wallet address"
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className="mt-10 flex justify-center text-red-500 underline">
          <button type="submit">Register Now</button>
        </div>
        {isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        <div className="absolute bottom-4 w-full text-center">
          <div className="text-black-300">
            Note: One-time transaction for registration
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
