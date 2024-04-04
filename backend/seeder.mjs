import dotenv from "dotenv";
import users from "./data/users.mjs";
import connectDB from "./config/db.mjs";
import User from "./models/userModel.mjs";
import colors from "colors";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
