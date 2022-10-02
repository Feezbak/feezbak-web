import React from "react";
import {
  Contact,
  ContactTypes,
  Description,
  HowToContactWrapper,
  Title,
} from "./styles";

const HowToContact = () => {
  return (
    <HowToContactWrapper>
      <Title>We’ll be more than glad to help you out</Title>
      <Description>
        You can either send us an Email or chat with us.
      </Description>
      <ContactTypes>
        <Contact
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:Hola@feezbak.com";
            e.preventDefault();
          }}
        >
          <span>🖐</span>
          <p>Hola@feezbak.com</p>
        </Contact>
        <Contact to="#">
          <span>📩</span>
          <p>Chat With Us</p>
        </Contact>
      </ContactTypes>
    </HowToContactWrapper>
  );
};

export default HowToContact;
