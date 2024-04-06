import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from 'body-parser';
import path from 'path';
import { generateQR } from './service/qrGenerator'; // Adjust the path as necessary
import connectDB from "./config/db.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import cors from "cors";


const port = 5000;

connectDB();

const app = express();

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from localhost:5000
    methods: "GET,POST", // Allow only GET and POST requests
    allowedHeaders: "Content-Type,Authorization", // Allow specific headers
  })
);
// Body-parser middleware (use built in express function)
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${port}`);
});

app.use(bodyParser.json()); // Support JSON-encoded bodies

// In server.mjs
app.use('/qr-codes', express.static(path.join(__dirname, 'service/qr-codes')));



app.post('/generateQR', async (req, res) => {
    const { walletAddress } = req.body;
    if (!walletAddress) {
        return res.status(400).send('Wallet address is required');
    }

    try {
        // Assuming generateQR function now just generates the QR and returns a path or URL to the generated QR code
        const qrCodePath = await generateQR(walletAddress, './qr-codes');
        // Respond with the URL or path to the generated QR code
        res.json({ qrCodeUrl: qrCodePath });
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Error generating QR code');
    }
});


