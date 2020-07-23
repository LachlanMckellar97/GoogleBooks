const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  key: Number,
  title: { type: String, required: true },
  author: { type: Array, required: true },
  info: String,
  image: String,
  infolink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;