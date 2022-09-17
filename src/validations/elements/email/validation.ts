import Joi from "joi";

export const emailSchema = Joi.string().email({ tlds: false }).max(320);
