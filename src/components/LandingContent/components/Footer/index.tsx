import Contacts from "./components/Contacts";
import {
  BenefitsHeading,
  FooterWrapper,
  FooterMainTitle,
  TryForFreeBtn,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <BenefitsHeading>Early Adopter’s Benefits</BenefitsHeading>
      <FooterMainTitle>
        Being part of our amazing journey means a lot to us. Create your account
        and gathering feedback
      </FooterMainTitle>
      <TryForFreeBtn href="/sign-up">Try it for free!</TryForFreeBtn>
      <Contacts />
    </FooterWrapper>
  );
};

export default Footer;
