exports.createBook = async (req, res, next) => {
  console.log("req:", req.body);
  res.status(200).json({ success: true, message: "A book is created" });
};

exports.getSingleBook = async (req, res, next) => {
  res.status(200).json({ success: true, message: "Get single book" });
};

exports.getAllBooks = async (req, res, next) => {
  res.status(200).json({ success: true, message: "Get all books" });
};

exports.updateBook = async (req, res, next) => {
  res.status(200).json({ sucess: true, message: "A book is updated" });
};

exports.deleteBook = async (req, res, next) => {
  res.status(200).json({ sucess: true, message: "A book is deleted" });
};
