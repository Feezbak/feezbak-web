import React from "react";
import EmailItem from "./components/EmailItem";
import { AnimatePresence } from "framer-motion";
import { EmailsListType } from "../../../SendToEmailAddresses";
import { List } from "./styles";

interface Props {
  listData: EmailsListType[];
  handleDeleteEmail: (id: string) => void;
}

const EmailsList = ({ listData, handleDeleteEmail }: Props) => {
  return (
    <List>
      <AnimatePresence initial={false}>
        {listData.map((email) => (
          <EmailItem
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
