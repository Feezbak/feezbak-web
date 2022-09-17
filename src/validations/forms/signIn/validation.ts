import Joi from "joi";
import { SignInEmailFormInputs } from "./type";
import { emailSchema, passwordSchema } from "@/validations";

export const SignInEmailSchema = Joi.object<SignInEmailFormInputs>({
  email: emailSchema.label("Email").required(),
  password: passwordSchema.label("Password").required(),
});
