// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const app = express();
// const dotenv = require("dotenv");
// const authRoute = require("./routes/auth");

// // database
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("db connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// // middlewares
// dotenv.config();
// app.use(express.json());
// app.use("/api/auth", authRoute);

// app.listen(process.env.PORT, () => {
//   connectDB();
//   console.log("app is running on port " + process.env.PORT);
// });


const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
const authRoute = require("./routes/auth");
const formRoute = require("./routes/form"); // Import the form route

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

// Middleware
dotenv.config();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173", credentials:true}))

// Routes
app.use("/api/auth", authRoute);
app.use("/api/form", formRoute); // Use the form route with the /api/form prefix

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB(); // Call the connectDB function before starting the server
  console.log(`Server is running on port ${PORT}`);
});
