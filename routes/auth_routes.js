const router = require("express").Router();

const { register } = require("../controllers/auth_controller");

router.route("/register").post(register);

module.exports = router;
