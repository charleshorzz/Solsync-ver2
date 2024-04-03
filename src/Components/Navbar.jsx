import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Link } from "react-router-dom";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/">
        <h3>Solsync</h3>
      </Link>
      <nav ref={navRef}>
        <WalletMultiButton />
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
