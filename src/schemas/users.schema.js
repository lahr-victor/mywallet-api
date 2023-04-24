// PACKAGE IMPORTS
import joi from 'joi';

// GLOBAL CONSTANTS
const userSchema = joi.object({
  name: joi.string().min(1).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

// VALUE EXPORTS
export default userSchema;
