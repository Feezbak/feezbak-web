import React, { useState } from "react";
import uuid from "react-uuid";
import { message } from "antd";
import TitleDescriptionPair from "../TitleDescriptionPair";
import AddEmailAddress from "./components/AddEmailAddress";
import EmailsList from "./components/EmailsList";
import SendEmailsFooter from "./components/SendEmailsFooter";
import { SendEmailAddressesWrapper } from "./styles";

export type EmailsListType = {
  email: string;
  id: string;
};

const SendToEmailAddresses = () => {
  const [emails, setEmail] = useState<EmailsListType[]>([]);

  const handleDeleteEmail = (id: string) => {
    const oldEmails = [...emails];
    const newEmails = oldEmails.filter((item) => item.id !== id);
    setEmail(newEmails);
  };

  const handleAddNewEmail = (email: string) => {
    if (email) {
      const oldEmails = [...emails];
      const hasAlreadyProvided = oldEmails.find((item) => item.email === email);
      if (!hasAlreadyProvided) {
        setEmail((ps) => [{ email, id: uuid() }, ...ps]);
      } else {
        message.info("Email Address was already provided!");
      }
    }
  };

  return (
    <SendEmailAddressesWrapper>
      <TitleDescriptionPair
        title="Send Via Email"
        text="Your friends will receive a link to this feedback"
      />
      <AddEmailAddress handleAddNewEmail={handleAddNewEmail} />
      <EmailsList listData={emails} handleDeleteEmail={handleDeleteEmail} />
      <SendEmailsFooter isDisabled={!emails.length} />
    </SendEmailAddressesWrapper>
  );
};

export default SendToEmailAddresses;
