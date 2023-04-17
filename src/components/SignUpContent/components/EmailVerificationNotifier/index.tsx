import React from "react";
import {
  Title,
  Description,
  VerificationWrapper,
  VerifyImg,
  IllustrationWrapper,
  Footer,
} from "./styles";
import emailVerifySrc from "@images/email-verification.png";

interface Props {
  setAccountState: (accountState: boolean) => void;
}

const EmailVerificationNotifier = ({ setAccountState }: Props) => {
  const handleGoToSignUp = () => {
    setAccountState(false);
  };

  return (
    <VerificationWrapper>
      <IllustrationWrapper>
        <VerifyImg src={emailVerifySrc} alt="Please verify your email" />
        <Title>Time to check your E-mail</Title>
        <Description>
          Please check your Email, We have just sent you an email verification.
        </Description>
      </IllustrationWrapper>
      <Footer>
        <p>
          Did not receive the email? Check your spam filter, or{" "}
          <span onClick={handleGoToSignUp}>try another email address</span>
        </p>
      </Footer>
    </VerificationWrapper>
  );
};

export default EmailVerificationNotifier;
