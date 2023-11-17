import mongoose from "mongoose";

const bookschemas = mongoose.Schema({
  bookname: {
    type: "string",
    required: true,
  },
  authorname: {
    type: "string",
    required: true,
  },
  publishyear: {
    type: "string",
    required: true,
  },
});
