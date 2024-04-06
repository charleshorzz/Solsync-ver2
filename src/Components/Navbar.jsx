import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import QRCode from "qrcode.react";
import "../Styles/navbar.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";
import useSmallScreen from "../hooks/reizeScreen";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  const navRef = useRef();

  const [showQRCode, setShowQRCode] = useState(false);
  const [maximizeQR, setMaximizeQR] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const toggleMaximizeQR = () => {
    setMaximizeQR(!maximizeQR);
  };

  const isSmallScreen = useSmallScreen();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="relative z-20">
      <Link to="/">
        <h2 className="font-bold">Solsync</h2>
      </Link>
      <nav ref={navRef} className="font-bold">
        <WalletMultiButton />
        {isSmallScreen && (
          <button className="font-bold" onClick={toggleQRCode}>
            Show QR Code
          </button>
        )}
        {isSmallScreen && <button>Scan</button>}
        {showQRCode && <QRCode value="QR Code" />}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {!isSmallScreen ? (
        <button className="flex items-end" onClick={toggleMaximizeQR}>
          <QRCode size={42} />
        </button>
      ) : (
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      )}
      {maximizeQR && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <button
              className="close-btn absolute top-0 right-0 m-2"
              onClick={toggleMaximizeQR}
            >
              <FaTimes className="mt-5 mr-8" size={30} />
            </button>
            <div className="flex items-center justify-center">
              <QRCode size={200} value="QR Code" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
