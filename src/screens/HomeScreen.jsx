import { Link } from "react-router-dom";
import SearchBar from "../Components/searchBar";
import InfoCard from "../Components/infoCard";
import Footer from "../Components/footer";

const handleSearch = (searchTerm) => {
  console.log("Searching for:", searchTerm);
};

const HomeScreen = () => {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-r from-violet-950 to-blue-900"
      style={{ zIndex: -1 }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/bg.png")' }}
      >
        <div className="text-5xl text-white font-bold mb-4">
          A Humandized Name By Wallet
        </div>
        <SearchBar onSearch={handleSearch}></SearchBar>
        <div className="mt-6 text-center text-white">
          Get Your Unique Name.
          <Link
            to="#"
            className="underline text-blue-500 hover:text-blue-700 ml-3"
          >
            Register
          </Link>
        </div>

        <div className="absolute top-full left-0 w-full py-10 bg-gradient-to-r from-violet-950 to-blue-900">
          <div className="text-4xl font-bold mt-20 max-w-5xl mx-auto">
            <div className="text-center text-white">
              Easy transfer using{" "}
              <span className="text-violet-400">SOLSYNC</span> rather than
              blockchain transfer with long wallet address
            </div>
          </div>
          <InfoCard
            title="Title"
            description="Description"
            imageUrl="https://via.placeholder.com/300"
          />
          <InfoCard
            title="Title"
            description="Description"
            imageUrl="https://via.placeholder.com/300"
          />
          <InfoCard
            title="Title"
            description="Description"
            imageUrl="https://via.placeholder.com/300"
          />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
