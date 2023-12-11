import joi from 'joi';

const transactionSchema = joi.object({
  description: joi.string().min(1).required(),
  value: joi.number().greater(0).required(),
  type: joi.string().valid('inflow', 'outflow').required(),
});

export default transactionSchema;
