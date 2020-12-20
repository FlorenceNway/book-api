const { SchemaType } = require("mongoose");

const Joi = require("joi");

exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  });

  return schema.validate(data);
};
