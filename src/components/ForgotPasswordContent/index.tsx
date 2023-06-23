import React, { useState } from "react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { EmailVerificationNotifier } from "@/shared";
import forgotPasswordImgSrc from "@images/forgot-pass.png";
import { AnimatePresence } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import {
  ForgotPasswordMainWrapper,
  ForgotPasswordFormWrapper,
  ImageContainer,
  AnimatedWrapper,
  TitleWrapper,
  Description,
  Content,
  Title3,
} from "./styles";

const ForgotPasswordContent = () => {
  const [isEmailSuccessfullySend, setEmailSendState] = useState(false);

  return (
    <ForgotPasswordMainWrapper>
      <AnimatePresence initial={false}>
        {isEmailSuccessfullySend ? (
          <EmailVerificationNotifier
            handleGoBackAction={() => setEmailSendState(false)}
          />
        ) : (
          <AnimatedWrapper {...opacityAnimation}>
            <ForgotPasswordFormWrapper>
              <ImageContainer
                xs={0}
                sm={0}
                md={0}
                lg={10}
                xl={8}
                xxl={6}
                flex="center"
              >
                <img
                  src={forgotPasswordImgSrc}
                  alt="Forgot password"
                  loading="lazy"
                />
              </ImageContainer>
              <Content xs={24} sm={24} md={12} lg={10} xl={9} xxl={7}>
                <TitleWrapper>
                  <Title3>Reset Your Password</Title3>
                  <Description>
                    Enter the email associated with your account and we'll send
                    an email with instructions to reset your password.
                  </Description>
                </TitleWrapper>
                <ForgotPasswordForm setEmailSendState={setEmailSendState} />
              </Content>
            </ForgotPasswordFormWrapper>
          </AnimatedWrapper>
        )}
      </AnimatePresence>
    </ForgotPasswordMainWrapper>
  );
};

export default ForgotPasswordContent;
