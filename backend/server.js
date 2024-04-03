import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body-parser middleware (use built in express function)
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} made on PORT ${port}`);
});
