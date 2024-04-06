const fs = require('fs');
const crypto = require('crypto');
const path = require('path');


// Function to read encryption keys and IVs from JSON file
function readEncryptionConfig() {
    const filePath = path.join(__dirname, 'encryptionKeys.json'); // Ensure the file path is correct
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return data.encryptionKey[0]; // Assuming you want the first set of keys and IVs
}

// Double decryption function using keys and IVs from the JSON file
function doubleDecrypt(encryptedData) {
    const { KEY1, KEY2, IV1, IV2 } = readEncryptionConfig();
    
    let key1Buffer = Buffer.from(KEY1, 'base64');
    let key2Buffer = Buffer.from(KEY2, 'base64');
    let iv1Buffer = Buffer.from(IV1, 'hex');
    let iv2Buffer = Buffer.from(IV2, 'hex');

    let decipher2 = crypto.createDecipheriv('aes-256-cbc', key2Buffer, iv2Buffer);
    let decrypted1 = decipher2.update(encryptedData, 'hex', 'hex');
    decrypted1 += decipher2.final('hex');
    
    let decipher1 = crypto.createDecipheriv('aes-256-cbc', key1Buffer, iv1Buffer);
    let decrypted2 = decipher1.update(decrypted1, 'hex', 'utf8');
    decrypted2 += decipher1.final('utf8');
    
    return decrypted2;
}

// Example usage (assuming you have an encrypted string to decrypt)
const encryptedData = '4f09bcb10f26084370b91a7185704fdf0708bf3efa339f8a7ab822e130266c06101814149ee635ca169f3b30c0fdd0b66d87e8d73104835fb5104ca4ca3188fc'; // Replace with your encrypted data
const decryptedData = doubleDecrypt(encryptedData);
console.log(decryptedData);

// a3e601feb9cc2f0eca4803bed5357e01e949926fb0ecd637cd3bc21e45aae310557df7490b9bd31a785c07cdba2b4218   
