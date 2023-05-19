import React, { useState } from "react";
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

  return (
    <SendEmailAddressesWrapper>
      <TitleDescriptionPair
        title="Send Via Email"
        text="Your friends will receive a link to this feedback"
      />
      <AddEmailAddress />
      {!!emails?.length && (
        <EmailsList listData={emails} handleDeleteEmail={handleDeleteEmail} />
      )}
      <SendEmailsFooter />
    </SendEmailAddressesWrapper>
  );
};

export default SendToEmailAddresses;
