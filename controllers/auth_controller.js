const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../utils/validation");

exports.register = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) {
      res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const isExistUser = await User.findOne({ email: req.body.email });
    if (isExistUser) return res.status(400).send("User already existed.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log("hashpw ==> ", hashedPassword);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const saveUser = await user.save(); // mongoose function to save in Db
    res.status(200).json({ success: true, message: { user: user._id } });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not valid");

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatePassword) return res.status(400).send("Password is incorrect");

    res.send("LOGIN SUCCESS");

    // Create jwt token
  } catch (error) {
    next(error);
  }
};
