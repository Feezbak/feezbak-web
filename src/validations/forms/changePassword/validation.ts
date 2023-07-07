import Joi from "joi";
import { ChangePasswordFormInputs } from "./type";
import { passwordSchema } from "@/validations";

export const ChangePasswordSchema = Joi.object<ChangePasswordFormInputs>({
  currentPassword: passwordSchema.label("password").required(),
  newPassword: passwordSchema
    .label("password")
    .valid(Joi.ref("currentPassword"))
    .invalid(Joi.ref("currentPassword"))
    .required(),
});
