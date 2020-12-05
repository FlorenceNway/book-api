const Book = require("../models/Book");

exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    next(error);
  }

  // console.log("req:", req.body);
  // res.status(200).json({ success: true, message: "A book is created" });
};

exports.getSingleBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res
      .status(200)
      .json({ success: true, data: book, message: "Get single book" });
  } catch (error) {
    next(error);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res
      .status(200)
      .json({ success: true, data: books, message: "Get all books" });
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const books = await Book.findByIdAndUpdate(req.params.id, req.body);
    const updatedBook = await Book.findById(books._id);
    res.status(200).json({
      sucess: true,
      updatedId: books._id,
      updatedBook: updatedBook,
      message: "A book is updated",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const books = await Book.findByIdAndDelete(req.params.id, req.body);
    const updatedBooks = await Book.find();
    res.status(200).json({
      sucess: true,
      updatedId: books._id,
      updatedBook: updatedBooks,
      message: "A book is deleted",
    });
  } catch (error) {
    next(error);
  }
};
