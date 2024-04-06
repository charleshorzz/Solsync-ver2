// import React, { useState, useEffect } from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
// const QRCode = require('qrcode');

// const QrRender = () => {
//     const { publicKey } = useWallet();
//     const [qrUrl, setQrUrl] = useState(null);
//     const fs = require('fs');



//     useEffect(() => {
//         if (publicKey) {
//             // Convert publicKey to a base58 string
//             const walletAddress = publicKey.toBase58();

//             if (fs.existsSync('./data.json')) {
//                 fs.readFile('./data.json', 'utf8', (err, data) => {
//                     if (err) {
//                         console.error('An error occurred:', err);
//                         return;
//                     }

//                     const json = JSON.parse(data);
//                     console.log(json);
//                 });
//             }

//             // Generate QR code for the walletAddress
//             QRCode.toDataURL(walletAddress, { errorCorrectionLevel: 'H' }, (err, url) => {
//                 if (err) console.error(err);
//                 else setQrUrl(url); // Update the qrUrl state
//             });
//         }
//     }, [publicKey]); // This effect depends on publicKey

//     if (!publicKey) {
//         return <div>Please connect your wallet.</div>;
//     }

//     return (
//         <div>
//             {qrUrl ? <img src={qrUrl} alt="Wallet QR Code" /> : <div>Generating QR code...</div>}
//         </div>
//     );
// };

// export default QrRender;

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import QRCode from 'qrcode';

const QrRender = () => {
    const { publicKey } = useWallet();
    const [qrUrl, setQrUrl] = useState(null);
    const [username, setUsername] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        if (publicKey) {
            const walletAddress = publicKey.toBase58();
            const data = JSON.parse(localStorage.getItem('walletData') || '{}');
            
            if (data[walletAddress]) {
                // Public key is registered, generate QR for the username
                setIsRegistered(true);
                setUsername(data[walletAddress].username);
                generateQRCode(data[walletAddress].username);
            } else {
                // Public key is not registered, prompt for username registration
                setIsRegistered(false);
            }
        }
    }, [publicKey]);

    const handleRegisterUser = (usernameInput) => {
        if (!publicKey || !usernameInput.trim()) return;

        const walletAddress = publicKey.toBase58();
        setUsername(usernameInput);
        setIsRegistered(true);

        generateQRCode(usernameInput, (url) => {
            const newData = JSON.parse(localStorage.getItem('walletData') || '{}');
            newData[walletAddress] = { username: usernameInput, qrUrl: url };

            localStorage.setItem('walletData', JSON.stringify(newData));
        });
    };

    const generateQRCode = (text, callback = null) => {
        QRCode.toDataURL(text, { errorCorrectionLevel: 'H' }, (err, url) => {
            if (err) {
                console.error('Error generating QR code:', err);
                return;
            }
            setQrUrl(url); // Update the qrUrl state
            if (callback) callback(url);
        });
    };

    if (!publicKey) {
        return <div>Please connect your wallet.</div>;
    }

    return (
        <div>
            {!isRegistered ?
                <div>
                    {/* Simplified example; replace with a form and proper input handling */}
                    Enter username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button onClick={() => handleRegisterUser(username)}>Register</button>
                </div>
                :
                qrUrl ? <img src={qrUrl} alt="QR Code for Username" /> : <div>Generating QR code...</div>
            }
        </div>
    );
};

export default QrRender;
