import QRCode from 'qrcode';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateQR(userName, walletAddress) {
    const qrCodeDirectory = path.join(__dirname, '../service/qr-codes');
    await fs.mkdir(qrCodeDirectory, { recursive: true }); // Ensure the directory exists

    // You might choose to use the userName for the file name instead, depending on your requirements
    const fileName = `${userName}.png`; // Using userName for file name for easier identification
    const filePath = path.join(qrCodeDirectory, fileName);

    try {
        // Here, assuming walletAddress contains the data you want encoded in the QR
        await QRCode.toFile(filePath, walletAddress, {
            errorCorrectionLevel: 'H'
        });
        console.log(`QR code saved to: ${filePath}`);
        return filePath; // Returning the path might be useful depending on how you use this function
    } catch (err) {
        console.error('Error generating QR code:', err);
        throw err; // Rethrow the error if you want calling code to handle it
    }
}

export { generateQR };


