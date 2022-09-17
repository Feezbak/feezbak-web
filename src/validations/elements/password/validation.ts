import Joi from "joi";
import { passwordValidation } from "../../customValidators";

export const passwordSchema = Joi.string()
  .min(8)
  .max(32)
  .custom(passwordValidation, "custom password validation");
