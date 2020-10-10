const express = require("express");
const router = require("./routes/book_routes");
const app = express();
// const router = express.Router();
app.use(express.json());

app.use("/movies", (req, res, next) => {
  // req = provide from FE, res = give from BE, next = like onSucess, for error handling
  res.status(200).json({ sucess: true });
  console.log("GET METHOD");
});

// router.get("/", (req, res) => {
//   console.log("hello");
//   //res.status(200).json({ sucess: true });
//   res.send("hello");
// });

app.use(router); // router middleware have to called with app.use to work

app.listen(5001, () => {
  console.log("Server is running at 5001");
});
