const router = require("express").Router();

router.post("/book", (req, res) => {
  res.status(200).json({ success: true, message: "A book is created" });
});

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Get all books" });
});

router.get("/book/:id", (req, res) => {
  res.status(200).json({ success: true, message: "Get single book" });
});

router.put("/book/:id", (req, res) => {
  res.status(200).json({ sucess: true, message: "A book is updated" });
});

router.delete("/book/:id", (req, res) => {
  res.status(200).json({ sucess: true, message: "A book is deleted" });
});

module.exports = router;

// mongoose is helper of mongoDB
