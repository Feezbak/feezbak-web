import Joi from "joi";
import {
  passwordValidation,
  joiGuessablePassword,
} from "../../customValidators";

export const passwordSchema = Joi.string()
  .min(8)
  .max(32)
  .custom(passwordValidation, "custom password validation")
  .custom(joiGuessablePassword);
