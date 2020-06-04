const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

// Import Route Files
const bootcampsRoute = require("./routes/bootcamps");

// Mounting Env Variables
dotenv.config({
  path: "./config/config.env",
});

// Inistalize an Express Router
const app = express();

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routes
app.use("/api/v1/bootcamps", bootcampsRoute);

// Define Port
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(
    `Server is running on ${NODE_ENV} mode at ${PORT}..`.yellow.underline.bold
  )
);

// console.log("Hi");
