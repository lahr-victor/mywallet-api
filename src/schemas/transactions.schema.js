// PACKAGE IMPORTS
import joi from 'joi';

// GLOBAL CONSTANTS
const transactionSchema = joi.object({
  description: joi.string().min(1).required(),
  value: joi.number().integer().greater(0).required(),
  type: joi.string().valid('inflow', 'outflow').required(),
});

// VALUE EXPORTS
export default transactionSchema;
