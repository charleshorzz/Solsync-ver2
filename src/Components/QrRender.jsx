import React, { useState, useEffect } from 'react'; // Corrected to include useState
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios'; // For HTTP requests

const QRCodeGenerator = () => {
    const { publicKey, connected } = useWallet();
    const [qrCodeUrl, setQrCodeUrl] = useState(''); // State to store the QR code URL

    useEffect(() => {
        const generateAndDisplayQR = async (walletAddress) => {
            try {
                // Ensure this URL matches your server's actual endpoint for QR code generation
                // Example: 'http://localhost:5000/generateQR'
                // Note: You cannot directly call a .mjs file on the server; it should be an endpoint exposed by your server
                const response = await axios.post('http://localhost:5000/generateQR', { walletAddress });
                // Update state with the QR code URL from the response
                setQrCodeUrl(response.data.qrCodeUrl);
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        };

        if (connected && publicKey) {
            const walletAddress = publicKey.toBase58();
            generateAndDisplayQR(walletAddress);
        }
    }, [connected, publicKey]);

    if (!connected) {
        return <div>Please connect your wallet to generate a QR code.</div>;
    }

    return (
        <div>
            {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="Generated QR Code" />
            ) : (
                <div>QR code will be displayed here once generated.</div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
