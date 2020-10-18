const router = require("express").Router();

router.post("/books", (req, res) => {
  res.status(200).json({ success: true, message: "A book is created" });
});

router.get("/books", (req, res) => {
  res.status(200).json({ success: true, message: "Get all books" });
});

router.get("/books/:id", (req, res) => {
  res.status(200).json({ success: true, message: "Get single book" });
});

router.put("/books/:id", (req, res) => {
  res.status(200).json({ sucess: true, message: "A book is updated" });
});

router.delete("/books/:id", (req, res) => {
  res.status(200).json({ sucess: true, message: "A book is deleted" });
});

module.exports = router;

// mongoose is helper of mongoDB
