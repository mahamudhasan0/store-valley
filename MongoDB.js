require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // Connect to mongodb
    const URI = process.env.MONGODB_CONNECTION_URL;
    await mongoose.connect(URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection failed!!");
  }
};
module.exports = connectDB;