import Joi from 'joi';

const imageSchema = Joi.object({});

export default imageSchema.options({
  abortEarly: false,
  allowUnknown: true,
});
