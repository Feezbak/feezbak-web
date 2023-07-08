import Joi from "joi";
import { ChangePasswordFormInputs } from "./type";
import { passwordSchema } from "@/validations";

export const ChangePasswordSchema = Joi.object<ChangePasswordFormInputs>({
  currentPassword: passwordSchema.label("Current Password").required(),
  newPassword: passwordSchema
    .required()
    .label("New Password")
    .options({ messages: { "any.only": "{{#label}} should not match" } }),
});
