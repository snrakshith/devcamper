const mongoose = require("mongoose");

// @desc DB Credentials
const connectBD = async () => {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${db.connection.host}`);
};

module.exports = connectBD;
