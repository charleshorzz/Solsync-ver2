import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import QRCode from "qrcode.react"; // Import QRCode library
import "../Styles/navbar.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  const navRef = useRef();

  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const isSmallScreen = window.innerWidth <= 640;

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
        <button className="bg-gray-200 flex items-end" onClick={toggleQRCode}>
          <QRCode size={42} />
        </button>
      ) : (
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      )}
    </header>
  );
};

export default Navbar;
