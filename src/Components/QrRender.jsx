import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
const QRCode = require('qrcode');

const QrRender = () => {
    const { publicKey } = useWallet();
    const [qrUrl, setQrUrl] = useState(null);

    useEffect(() => {
        if (publicKey) {
            // Convert publicKey to a base58 string
            const walletAddress = publicKey.toBase58();

            // Generate QR code for the walletAddress
            QRCode.toDataURL(walletAddress, { errorCorrectionLevel: 'H' }, (err, url) => {
                if (err) console.error(err);
                else setQrUrl(url); // Update the qrUrl state
            });
        }
    }, [publicKey]); // This effect depends on publicKey

    if (!publicKey) {
        return <div>Please connect your wallet.</div>;
    }

    return (
        <div>
            {qrUrl ? <img src={qrUrl} alt="Wallet QR Code" /> : <div>Generating QR code...</div>}
        </div>
    );
};

export default QrRender;
