import { CustomValidator } from "joi";
import isString from "lodash.isstring";
import zxcvbn from "zxcvbn";

export const joiGuessablePassword: CustomValidator = (value, helper) => {
  if (zxcvbn(value).score < 2) {
    return helper.error("any.invalid");
  }
  return value;
};

export const passwordValidation: CustomValidator = (value, helper) => {
  if (!isString(value) || /^((?! +).)*$/.test(value.trim()) === false) {
    return helper.error("Please provide right format");
  }

  return value;
};
