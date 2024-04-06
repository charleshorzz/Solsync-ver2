import SearchBar from "../Components/searchBar";
import InfoCard from "../Components/infoCard";
import Footer from "../Components/footer";

const infoCard = [
  {
    title: "Ease of Use",
    description:
      "Easy transfer money by searching username. Minimize the error of copy wrong wallet address",
    imageUrl: "/easeUse.png",
  },
  {
    title: "Affordable By Public",
    description: "Low registration fee compared to other blockchain services",
    imageUrl: "/registration.png",
  },
  {
    title: "Transparency Over Transaction",
    description: "Track users transaction histories using Solscan",
    imageUrl: "/transaction.png",
  },
];

const HomeScreen = () => {
  return (
    <div className="absolute inset-0" style={{ zIndex: -1 }}>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/2862666.jpg")',
        }}
      >
        <div className="text-5xl text-white font-bold mb-4 max-sm:text-3xl">
          Solana Humandized Wallet
        </div>
        <SearchBar />
        <div className="absolute top-full left-0 w-full py-10 bg-gradient-to-r from-violet-900 to-blue-600">
          <div className="text-4xl font-bold mt-20 max-w-5xl mx-auto">
            <div className="text-center text-white max-sm:text-xl">
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
