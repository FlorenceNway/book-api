const router = require("express").Router();

const { register, login } = require("../controllers/auth_controller");

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
