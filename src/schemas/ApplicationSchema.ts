import Joi from "joi";

export const ApplicationSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  version: Joi.string(),
  description: Joi.string(),
  outputDirectory: Joi.string().required()
})
  .meta({ className: 'Application'})
  .label('Application')
