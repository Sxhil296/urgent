// index.js
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

// middlewares
dotenv.config();
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port "+process.env.PORT);
});
