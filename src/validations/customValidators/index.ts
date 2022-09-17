import { CustomValidator } from "joi";
import isString from "lodash.isstring";

export const passwordValidation: CustomValidator = (value, helper) => {
  if (!isString(value) || /^((?! +).)*$/.test(value.trim()) === false) {
    return helper.error("Please provide right format");
  }

  return value;
};
