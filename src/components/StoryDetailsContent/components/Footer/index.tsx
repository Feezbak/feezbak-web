import React from "react";
import {
  DetailsFooterWrapper,
  FooterTextWithLink,
  Description,
} from "./styles";

const Footer = () => {
  const handleCreateStory = () => {
    //Todo send request to get id of new story intent
  };

  return (
    <DetailsFooterWrapper>
      <Description>
        This link will be in your account you can send it to your friends
        anytime you want
      </Description>
      <FooterTextWithLink>
        Ready to create new Story?{" "}
        <span onClick={handleCreateStory}>Create new story</span>
      </FooterTextWithLink>
    </DetailsFooterWrapper>
  );
};

export default Footer;
