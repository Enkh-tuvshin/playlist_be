const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || 27017;

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected app");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connect;