const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

// Directory for QR code images
const qrCodeDirectory = './qr-codes';



// const KEY1 = 'GoNosPkZU6zmzAIitAOpQFb3glQSnaJrWEzOv5L5qLw='; // First encryption key
// const KEY2 = 'USbNVXzlLzaCGCTHXWMs_vYFMv3blDuzLMMoMkU-_nA='; // Second encryption key
// const IV1 = '297c3917566b4ba0612dd16a9db31c7c';  // First IV for AES-256-CBC
// const IV2 = 'efcb8dee323cf1173fcebcfac4e484df';  // Second IV for AES-256-CBC

// Function to read encryption keys and IVs from JSON file
function readEncryptionConfig() {
    const filePath = path.join(__dirname, './encryptionKeys.json'); // Ensure the file path is correct
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return data.encryptionKey[0]; // Assuming you want the first set of keys and IVs
}

function doubleEncrypt(data) {
    const { KEY1, KEY2, IV1, IV2 } = readEncryptionConfig();

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



// Modified functions to include encryption
// function generateQR(walletAddress) {
//   const encryptedAddress = doubleEncrypt(walletAddress);
//   const filePath = path.join(qrCodeDirectory, `${Buffer.from(encryptedAddress).toString('base64')}.png`);

//   if (fs.existsSync(filePath)) {
//     console.log(`QR code already exists for this address.`);
//     return;
//   }

//   QRCode.toFile(filePath, encryptedAddress, { errorCorrectionLevel: 'H' }, function (err) {
//     if (err) throw err;
//     console.log(`QR code generated and saved.`);
//   });
// }

// function generateQR(walletAddress, qrCodeDirectory, logoPath) {
//     const encryptedAddress = doubleEncrypt(walletAddress);
//     const base64FileName = `${Buffer.from(encryptedAddress).toString('base64')}.png`;
//     const filePath = path.join(qrCodeDirectory, base64FileName);
  
//     if (fs.existsSync(filePath)) {
//       console.log(`QR code already exists for this address.`);
//       return;
//     }
  
//     // Generate the QR code to a data URL we can use to create a buffer
//     QRCode.toDataURL(encryptedAddress, { errorCorrectionLevel: 'H' }, function (err, url) {
//       if (err) throw err;
  
//       // Use Sharp to overlay the logo on the QR code
//       const qrImage = sharp(Buffer.from(url.split(',')[1], 'base64'));
  
//       // Read the logo file and resize it
//       sharp(logoPath)
//         .resize(60, 60) // Resize logo to fit in the QR code
//         .toBuffer()
//         .then(logoBuffer => {
//           qrImage
//             .composite([{ input: logoBuffer, gravity: 'centre' }]) // Overlay the logo on the QR code
//             .toFile(filePath) // Save the final image
//             .then(() => {
//               console.log(`QR code with logo saved to: ${filePath}`);
//             })
//             .catch(err => {
//               console.error('Error saving QR code with logo:', err);
//             });
//         })
//         .catch(err => {
//           console.error('Error reading logo file:', err);
//         });
//     });
//   }

function generateQR(walletAddress, qrCodeDirectory) {
    const encryptedAddress = doubleEncrypt(walletAddress);
    const base64FileName = `${Buffer.from(encryptedAddress).toString('base64')}.png`;
    const filePath = path.join(qrCodeDirectory, base64FileName);
  
    if (fs.existsSync(filePath)) {
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
  }
  
  // Usage
  

  
  

// Example usage
const walletAddress = '7EF3S6iff1GYh8ccTcgNTcP75Gyk7Wpn8Jo3ByH1ABPg';


generateQR(walletAddress, qrCodeDirectory);

// 7EF3S6iff1GYh8ccTcgNTcP75Gyk7Wpn8Jo3ByH1ABPg


