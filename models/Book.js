const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  pages: Number,
  description: {
    type: String,
    maxlength: [500, "Please do not exceed 500 characters"],
  },
  createdAt: Date.now
});

module.exports = mongoose.model("Book", BookSchema);
