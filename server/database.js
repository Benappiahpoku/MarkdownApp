const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error(`Error while connecting to MongoDB: ${err.message}`);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
