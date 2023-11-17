import express from "express";
import { MONGODB_URL, PORT } from "./config.js";
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hellwo ");
});

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`the port is listening on ${PORT}`);
});
