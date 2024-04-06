import React, { useRef, useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QrCodeScanner = ({ onScanSuccess, onScanError }) => {
  const qrRef = useRef(null);
  // State to track if the scanner has started
  const [isScannerStarted, setIsScannerStarted] = useState(false);

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 500, height: 500 } };
    // Ensure the ID is unique or directly use the ref as the scanner's target.
    const html5QrCode = new Html5Qrcode(qrRef.current.id);

    const startCameraAndScan = async () => {
      try {
        await html5QrCode.start(
          { facingMode: "environment" }, // Use the back camera
          config,
          (decodedText, decodedResult) => {
            // Handle the scanned code as needed
            onScanSuccess(decodedText, decodedResult);
          }
        );
        setIsScannerStarted(true); // Mark scanner as started
      } catch (error) {
        onScanError(error);
        setIsScannerStarted(false); // Ensure flag is reset if starting fails
      }
    };

    startCameraAndScan();

    return () => {
      // Only attempt to stop the scanner if it was successfully started
      if (isScannerStarted) {
        html5QrCode.stop().catch((error) => console.log("Error stopping the QR code scanner.", error));
      }
    };
  }, [onScanSuccess, onScanError]);

  return <div id="qr-code-scanner" ref={qrRef} />;
};

export default QrCodeScanner;
