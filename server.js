require("dotenv").config({ path: "./config.env" });
const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser =require("body-parser")
const ProductRoutes = require("./routes/ProductRoutes");

//DATABASE
const connectDB = require("./MongoDB");
connectDB();

//INITIALIZE APP
const app = express();

//MIDDLEWARE
// app.use(express.json());
// app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '200mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
app.use(cors());

//ROUTES Middleware
app.use("/api", ProductRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});