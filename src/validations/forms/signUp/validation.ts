import Joi from "joi";
import { SignUpEmailFormInputs } from "./type";
import { emailSchema, passwordSchema } from "@/validations";

export const SignUpEmailSchema = Joi.object<SignUpEmailFormInputs>({
  email: emailSchema.label("Email").required(),
  password: passwordSchema.label("Password").required(),
  firstName: Joi.string().label("Firstname").required(),
  lastName: Joi.string().label("Lastname").required(),
  profession: Joi.string().label("Profession").optional(),
});
