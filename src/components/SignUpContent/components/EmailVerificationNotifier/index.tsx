import React from "react";
import { Title, Description, VerificationWrapper } from "./styles";

const EmailVerificationNotifier = () => {
  return (
    <VerificationWrapper>
      <Title>Verify Your Account</Title>
      <Description>
        Please check your Email, We have just sent you an email verification.
      </Description>
    </VerificationWrapper>
  );
};

export default EmailVerificationNotifier;
