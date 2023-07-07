import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { FormContainer } from "./styles";

const PasswordForm = () => {
  return <FormContainer {...opacityAnimation}></FormContainer>;
};

export default PasswordForm;
