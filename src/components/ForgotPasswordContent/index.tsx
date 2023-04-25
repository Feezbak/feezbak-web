import React from "react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import forgotPasswordImgSrc from "@images/forgot-pass.png";
import {
  ForgotPasswordMainWrapper,
  ForgotPasswordFormWrapper,
  ImageContainer,
  Content,
  Title3,
  TitleWrapper,
  Description,
} from "./styles";

const ForgotPasswordContent = () => {
  return (
    <ForgotPasswordMainWrapper>
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
              Enter the email associated with your account and we'll send an
              email with instructions to reset your password.
            </Description>
          </TitleWrapper>
          <ForgotPasswordForm />
        </Content>
      </ForgotPasswordFormWrapper>
    </ForgotPasswordMainWrapper>
  );
};

export default ForgotPasswordContent;
