import QRCode from 'qrcode';
import fs from 'fs/promises'; // For async operations
import fsSync from 'fs'; // Import separately if you absolutely need synchronous methods
import path from 'path';
import sharp from 'sharp';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Directory for QR code images
const qrCodeDirectory = './qr-codes'


// Corrected and simplified version of readEncryptionConfig with async readFile
async function readEncryptionConfig() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, './encryptionKeys.json');
    const jsonData = await fs.readFile(filePath, 'utf8'); // Using fs.promises.readFile for async operation
    const data = JSON.parse(jsonData);
    return data.encryptionKey[0];
}


async function doubleEncrypt(data) {
    const { KEY1, KEY2, IV1, IV2 } = await readEncryptionConfig();

    // Decode keys and IVs from base64 and hex to buffers
    let key1Buffer = Buffer.from(KEY1, 'base64');
    let key2Buffer = Buffer.from(KEY2, 'base64');
    let iv1Buffer = Buffer.from(IV1, 'hex');
    let iv2Buffer = Buffer.from(IV2, 'hex');

    // First layer of encryption
    let cipher1 = crypto.createCipheriv('aes-256-cbc', key1Buffer, iv1Buffer);
    let encrypted1 = cipher1.update(data, 'utf8', 'hex');
    encrypted1 += cipher1.final('hex');
    
    // Second layer of encryption
    let cipher2 = crypto.createCipheriv('aes-256-cbc', key2Buffer, iv2Buffer);
    let encrypted2 = cipher2.update(encrypted1, 'hex', 'hex');
    encrypted2 += cipher2.final('hex');
    
    return encrypted2;
}

export async function generateQR(walletAddress,   qrCodeDirectory) {
  const encryptedAddress = await doubleEncrypt(walletAddress);
    const base64FileName = `${Buffer.from(encryptedAddress).toString('base64')}.png`;
    const filePath = path.join(qrCodeDirectory, base64FileName);
  try {
    if (fsSync.existsSync(filePath)) {
      console.log(`QR code already exists for this address.`);
      return;
    }

    // Generate the QR code to a data URL we can use to create a buffer
    QRCode.toDataURL(encryptedAddress, {
      errorCorrectionLevel: 'H',
      margin: 1,
      color: { dark: "#000000", light: "#0000" } // light set to transparent
    }, function (err, url) {
      if (err) throw err;
  
      const qrImageBuffer = Buffer.from(url.split(',')[1], 'base64');
      
      sharp(qrImageBuffer)
        .metadata()
        .then(metadata => {
          const logoSize = Math.round(metadata.width / 5);
          const logoPosition = Math.round((metadata.width - logoSize) / 2);
  
          // This creates a canvas that is the same size as the QR code with a transparent square in the middle
          sharp({
            create: {
              width: metadata.width,
              height: metadata.height,
              channels: 4,
              background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
          })
          .composite([{
            input: qrImageBuffer,
            blend: 'over'
          }, {
            // Create a transparent square where the logo would normally go
            input: Buffer.from(`<svg width="${logoSize}" height="${logoSize}">
              <rect x="0" y="0" width="${logoSize}" height="${logoSize}" fill="#FFF" fill-opacity="0" />
            </svg>`),
            top: logoPosition,
            left: logoPosition,
            blend: 'over'
          }])
          .toFile(filePath)
          .then(() => {
            console.log(`QR code with transparent space saved to: ${filePath}`);
          })
          .catch(err => {
            console.error('Error creating QR code with transparent space:', err);
          });
        });
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
  } 
    
  }

  const walletAddress = '7EF3S6iff1GYh8ccTcgNTcP75Gyk7Wpn8Jo3ByH1ABPg';


generateQR(walletAddress, qrCodeDirectory);