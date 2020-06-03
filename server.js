const express = require("express");
const dotenv = require("dotenv");

// Mounting Env Variables
dotenv.config({
  path: "./config/config.env",
});

// Inistalize an Express Router
const app = express();

// Define Port
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(`Server is running on ${NODE_ENV} mode at ${PORT}`);
