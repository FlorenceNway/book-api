const router = require("express").Router();
const {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/book_controller");

router.route("/").post(createBook).get(getAllBooks);

router.route("/:id").get(getSingleBook).put(updateBook).delete(deleteBook);

// router.post("/books", (req, res) => {
//   res.status(200).json({ success: true, message: "A book is created" });
// });

// router.get("/books", (req, res) => {
//   res.status(200).json({ success: true, message: "Get all books" });
// });

// router.get("/books/:id", (req, res) => {
//   res.status(200).json({ success: true, message: "Get single book" });
// });

// router.put("/books/:id", (req, res) => {
//   res.status(200).json({ sucess: true, message: "A book is updated" });
// });

// router.delete("/books/:id", (req, res) => {
//   res.status(200).json({ sucess: true, message: "A book is deleted" });
// });

module.exports = router;

// mongoose is helper of mongoDB
