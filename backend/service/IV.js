const crypto = require('crypto');
const IV1 = crypto.randomBytes(16); 

console.log(IV1.toString('hex'));