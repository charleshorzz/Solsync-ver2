import QRCode from 'qrcode';
import fs from 'fs/promises'; // For async operations
import fsSync from 'fs'; // Import separately if you absolutely need synchronous methods
import path from 'path';
import sharp from 'sharp';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Directory for QR code images
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const qrCodeDirectory = path.join(__dirname, 'qr-codes');
const port = 5000; // Make sure to match this with your server's port


// Corrected and simplified version of readEncryptionConfig with async readFile
async function readEncryptionConfig() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, './encryptionKeys.json');
    const jsonData = await fs.readFile(filePath, 'utf8'); // Using fs.promises.readFile for async operation
    const data = JSON.parse(jsonData);
    return data.encryptionKey[0];
}

async function retrieveUserData(){
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, '../data/users.json');
  const jsonData = await fs.readFile(filePath, 'utf8'); // Using fs.promises.readFile for async operation
  const data = JSON.parse(jsonData);
  return data;
}

const { user } = await retrieveUserData();

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


export async function generateQR(user) {
  const encryptedAddress = await doubleEncrypt(user);
  const base64FileName = `${Buffer.from(encryptedAddress).toString('base64')}.png`;
  const filePath = path.join(qrCodeDirectory, base64FileName);

  if (fsSync.existsSync(filePath)) {
      console.log(`QR code already exists for this address.`);
      return `http://localhost:${port}/qr-codes/${encodeURIComponent(base64FileName)}`;
  }

  try {
      const qrCodeDataUrl = await QRCode.toDataURL(encryptedAddress, {
          errorCorrectionLevel: 'H',
          margin: 1,
          color: { dark: "#000000", light: "#0000" } // assuming light: "#0000" is intentional for transparency
      });

      const qrImageBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');

      const metadata = await sharp(qrImageBuffer).metadata();
      const logoSize = Math.round(metadata.width / 5);
      const logoPosition = Math.round((metadata.width - logoSize) / 2);

      await sharp({
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
          input: Buffer.from(`<svg width="${logoSize}" height="${logoSize}">
            <rect x="0" y="0" width="${logoSize}" height="${logoSize}" fill="#FFF" fill-opacity="0" />
          </svg>`),
          top: logoPosition,
          left: logoPosition,
          blend: 'over'
      }])
      .toFile(filePath);

      console.log(`QR code with transparent space saved to: ${filePath}`);
      return `http://localhost:${port}/qr-codes/${encodeURIComponent(base64FileName)}`;
  } catch (error) {
      console.error('Error generating QR code:', error);
      throw error;
  }
}

