import Joi from 'joi';

const signInSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().required()
});

export default signInSchema;
