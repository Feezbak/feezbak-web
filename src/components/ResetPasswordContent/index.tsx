import React from "react";
import ResetPasswordForm from "./components/ResetPasswordForm";
import forgotPasswordImgSrc from "@images/forgot-pass.png";
import {
  ResetPasswordMainWrapper,
  ResetPasswordFormWrapper,
  ImageContainer,
  Content,
  Title3,
  TitleWrapper,
  Description,
} from "./styles";

const ResetPasswordContent = () => {
  return (
    <ResetPasswordMainWrapper>
      <ResetPasswordFormWrapper>
        <ImageContainer
          xs={0}
          sm={0}
          md={0}
          lg={10}
          xl={8}
          xxl={6}
          flex="center"
        >
          <img src={forgotPasswordImgSrc} alt="Reset password" loading="lazy" />
        </ImageContainer>
        <Content xs={24} sm={24} md={12} lg={10} xl={9} xxl={7}>
          <TitleWrapper>
            <Title3>Reset Your Password</Title3>
            <Description>
              Your new password must be different from previous used passwords.
            </Description>
          </TitleWrapper>
          <ResetPasswordForm />
        </Content>
      </ResetPasswordFormWrapper>
    </ResetPasswordMainWrapper>
  );
};

export default ResetPasswordContent;
