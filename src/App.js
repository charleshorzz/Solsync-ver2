import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletConnectProvider } from "./Components/WalletConnectProvider.jsx";

const App = () => {
  return (
    <>
      <WalletConnectProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </WalletConnectProvider>
    </>
  );
};

export default App;
