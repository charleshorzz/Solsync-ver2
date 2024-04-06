import express from "express";
import {
  registerUser,
  getUserByName,
  getUsers,
} from "../controllers/userController.mjs";

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(getUsers);
userRoutes.route("/:name").get(getUserByName);
// Simple GET endpoint
userRoutes.get("/test", (req, res) => {
  res.send("Test endpoint works!");
});

export default userRoutes;
