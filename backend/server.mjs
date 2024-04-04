import express from "express";
import dotenv from "dotenv";
dotenv.config();
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
