import Joi from "joi";
import { SignUpEmailFormInputs } from "./type";
import { emailSchema, passwordSchema } from "@/validations";

export const SignUpEmailSchema = Joi.object<SignUpEmailFormInputs>({
  email: emailSchema.label("Email").required(),
  password: passwordSchema.label("Password").required(),
  firstName: Joi.string().label("First Name").required(),
  lastName: Joi.string().label("Last Name").required(),
  profession: Joi.string().label("Profession").optional(),
});
