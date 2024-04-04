import { Link } from "react-router-dom";
import SearchBar from "../Components/searchBar";
import InfoCard from "../Components/infoCard";
import Footer from "../Components/footer";

const handleSearch = (searchTerm) => {
  console.log("Searching for:", searchTerm);
};

const infoCard = [
  {
    title: "Title 1",
    description: "Description 1",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Title 2",
    description: "Description 2",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    title: "Title 3",
    description: "Description 3",
    imageUrl: "https://via.placeholder.com/300",
  },
];
const HomeScreen = () => {
  return (
    <div className="absolute inset-0" style={{ zIndex: -1 }}>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/2862666.jpg")' }}
      >
        <div className="text-5xl text-white font-bold mb-4">
          A Humandized Name By Wallet
        </div>
        <SearchBar onSearch={handleSearch}></SearchBar>
        <div className="mt-6 text-center text-white">
          Get Your Unique Name.
          <Link
            to="/register"
            className="underline text-blue-500 hover:text-blue-700 ml-3"
          >
            Register
          </Link>
        </div>

        <div className="absolute top-full left-0 w-full py-10">
          <div className="text-4xl font-bold mt-20 max-w-5xl mx-auto">
            <div className="text-center text-white">
              Easy transfer using{" "}
              <span className="text-violet-400">SOLSYNC</span> rather than
              blockchain transfer with long wallet address
            </div>
          </div>
          <div>
            {infoCard.map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
