const verify = require("../utils/verifyToken");
const router = require("express").Router();
const {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/book_controller");

router.route("/").post(verify, createBook).get(verify, getAllBooks);

router
  .route("/:id", verify)
  .get(verify, getSingleBook)
  .put(verify, updateBook)
  .delete(verify, deleteBook);

// router.post("/books", *verify*,  (req, res) => {
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
