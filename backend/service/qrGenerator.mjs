import mongoose from "mongoose";

const qrGeneratorSchema = new mongoose.Schema({


    // Encrypted wallet address is the address that will be encrypted and stored in the QR code
  encryptedWalletAddress: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Assuming you have a User model for user details
    required: false // Make true if you require user authentication
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Example customization options; adjust based on what your app allows
  customizationOptions: {
    color: {
      type: String,
      default: '#000000' // Default QR code color
    },
    size: {
      type: Number,
      default: 256 // Default size in pixels
    }
  }
});

export default mongoose.model('QRGenerator', qrGeneratorSchema);
