const User = require("../models/User");
const { registerValidation } = require("../utils/validation");

exports.register = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) {
      res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const saveUser = await user.save(); // mongoose function to save in Db
    res.status(200).json({ success: true, message: { user: user._id } });
  } catch (error) {
    next(error);
  }
};
