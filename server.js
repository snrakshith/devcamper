const express = require("express");
const dotenv = require("dotenv");

// Import Route Files
const bootcampsRoute = require("./routes/bootcamps");

// Mounting Env Variables
dotenv.config({
  path: "./config/config.env",
});

// Inistalize an Express Router
const app = express();

// Mount Routes
app.use("/api/v1/bootcamps", bootcampsRoute);

// Define Port
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(`Server is running on ${NODE_ENV} mode at ${PORT}`)
);

// console.log("Hi");
