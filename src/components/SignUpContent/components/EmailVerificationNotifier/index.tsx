import {
  Title,
  Description,
  VerificationWrapper,
  VerifyImg,
  IllustrationWrapper,
  Footer,
} from "./styles";
import emailVerifySrc from "@images/email-verification.webp";

interface Props {
  handleGoBackAction: () => void;
}

const EmailVerificationNotifier = ({ handleGoBackAction }: Props) => {
  return (
    <VerificationWrapper>
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
