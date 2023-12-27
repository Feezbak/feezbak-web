import Joi from "joi";
import { ContactsCollectingInputs } from "./type";
import { emailSchema } from "@/validations";

export const ContactsCollectingSchema = Joi.object<ContactsCollectingInputs>({
  firstName: Joi.string().label("First Name").required(),
  lastName: Joi.string().label("Last Name").required(),
  email: emailSchema.label("Email Address").required(),
  phone: Joi.string().label("Phone").allow(null).optional(),
});
