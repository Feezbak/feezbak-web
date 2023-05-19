import Joi from "joi";
import { AddEmailFormInputs } from "./type";
import { emailSchema } from "@/validations";

export const AddEmailSchema = Joi.object<AddEmailFormInputs>({
  email: emailSchema.label("Email").required(),
});
