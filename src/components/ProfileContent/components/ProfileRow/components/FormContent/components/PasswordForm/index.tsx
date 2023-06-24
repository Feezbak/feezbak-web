import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { FormContainer } from "./styles";
import ResetPasswordForm from "@components/ResetPasswordContent/components/ResetPasswordForm";

const PasswordForm = () => {
  return (
    <FormContainer {...opacityAnimation}>
      <ResetPasswordForm isAuth={false} />
    </FormContainer>
  );
};

export default PasswordForm;
