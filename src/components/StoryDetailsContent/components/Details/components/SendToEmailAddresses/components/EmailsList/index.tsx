import React from "react";
import EmailItem from "./components/EmailItem";
import { AnimatePresence } from "framer-motion";
import { EmailsListType } from "../../../SendToEmailAddresses";
import { List } from "./styles";

interface Props {
  listData: EmailsListType[];
  emailsDefault: string[];
  handleDeleteEmail: (id: string) => void;
}

const EmailsList = ({ listData, handleDeleteEmail, emailsDefault }: Props) => {
  return (
    <List>
      <AnimatePresence initial={false}>
        {listData.map((email) => (
          <EmailItem
            isDeleteDisabled={emailsDefault.includes(email.email)}
            key={email.id}
            id={email.id}
            email={email.email}
            handleDeleteEmail={handleDeleteEmail}
          />
        ))}
      </AnimatePresence>
    </List>
  );
};

export default EmailsList;
