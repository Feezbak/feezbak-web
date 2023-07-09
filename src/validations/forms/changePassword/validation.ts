import Joi from "joi";
import { ChangePasswordFormInputs } from "./type";
import { passwordSchema } from "@/validations";

export const ChangePasswordSchema = Joi.object<ChangePasswordFormInputs>({
  currentPassword: passwordSchema.label("Current Password").required(),
  newPassword: passwordSchema.label("New Password").required(),
});
