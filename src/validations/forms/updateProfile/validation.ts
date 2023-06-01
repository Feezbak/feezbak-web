import Joi from "joi";
import { UpdateProfileFormInputs } from "./type";
import { emailSchema } from "@/validations";

export const UpdateProfileSchema = Joi.object<UpdateProfileFormInputs>({
  firstName: Joi.string().label("Firstname").required(),
  lastName: Joi.string().label("Lastname").required(),
  email: emailSchema.label("Email").required(),
  profession: Joi.string().label("Profession").required(),
});
