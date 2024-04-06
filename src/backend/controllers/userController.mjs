import asyncHandler from "../middleware/asyncHandler.mjs";
import User from "../models/userModel.mjs";

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, walletAddress, qrCode } = req.body;

  const userExists = await User.findOne({
    name: name,
    walletAddress: walletAddress,
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name: name,
    walletAddress: walletAddress,
    qrCode: qrCode,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      walletAddress: user.walletAddress,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Get users
// @route GET /api/users
// @access Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc Get user by Id
// @route GET /api/users/:id
// @access Public
const getUserByName = asyncHandler(async (req, res) => {
  const { name } = req.params;

  const user = await User.findOne({ name }).select("-password");

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerUser, getUserByName, getUsers };
