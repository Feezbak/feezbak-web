import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import emailVerifySrc from "@images/email-verification.png";
import {
  VerificationWrapper,
  IllustrationWrapper,
  Description,
  VerifyImg,
  Footer,
  Title,
} from "./styles";

interface Props {
  handleGoBackAction: () => void;
}

const EmailVerificationNotifier = ({ handleGoBackAction }: Props) => {
  return (
    <VerificationWrapper {...opacityAnimation}>
      <IllustrationWrapper>
        <VerifyImg
          src={emailVerifySrc}
          alt="Please check your email"
          loading="lazy"
        />
        <Title>Time to check your E-mail</Title>
        <Description>
          Please check your Email, We have just sent you an email verification.
        </Description>
      </IllustrationWrapper>
      <Footer>
        <p>
          Did not receive the email? Check your spam filter, or{" "}
          <span onClick={handleGoBackAction}>try another email address</span>
        </p>
      </Footer>
    </VerificationWrapper>
  );
};

export default EmailVerificationNotifier;
