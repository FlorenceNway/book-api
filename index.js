const express = require("express");
const book_routes = require("./routes/book_routes");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const moongoose = require("mongoose");
// const router = express.Router();
// app.use(express.json()); //can use either bodypaser or express.json

// app.use("/movies", (req, res, next) => {
//   // req = provide from FE, res = give from BE, next = like onSucess, for error handling
//   res.status(200).json({ sucess: true });
//   console.log("GET METHOD");
// });

// router.get("/", (req, res) => {
//   console.log("hello");
//   //res.status(200).json({ sucess: true });
//   res.send("hello");
// });
app.use(bodyParser.json());
app.use(cors());
// app.use(router); // router middleware have to called with app.use to work
moongoose.connect(
  "mongodb+srv://root:floDB02!@books-db.hsc69.mongodb.net/books-DB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database is connected! ");
  }
);
app.use("/api/books", book_routes);

app.listen(5001, () => {
  console.log("Server is running at 5001");
});
