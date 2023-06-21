import Joi from "joi";
import { ForgotPasswordFormInputs } from "./type";
import { emailSchema } from "@/validations";

export const ForgotPasswordSchema = Joi.object<ForgotPasswordFormInputs>({
  forgotEmail: emailSchema.label("Email").required(),
});
