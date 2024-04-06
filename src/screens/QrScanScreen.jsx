import "react-toastify/dist/ReactToastify.css";
import QrCodeScanner from "../Components/qrScanPage.jsx";


const QrScanScreen = () => {

  const handleScanSuccess = (decodedText, decodedResult) => {
    console.log(`QR Code detected: ${decodedText}`, decodedResult);
  };

  const handleScanError = (error) => {
    console.error("QR Scan error:", error);
  };


  return (
    <>
      <h1>QR Code Scanner</h1>
      <QrCodeScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
    </>
  );
};

export default QrScanScreen;
