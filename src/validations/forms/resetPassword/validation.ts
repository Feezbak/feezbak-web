import Joi from "joi";
import { ResetPasswordFormInputs } from "./type";
import { passwordSchema } from "@/validations";

export const ResetPasswordSchema = Joi.object<ResetPasswordFormInputs>({
  password: passwordSchema.label("password").required(),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
});
