import React from "react";
import { TrashBlackIcon } from "@/icons";
import { ItemWrapper, EmailSpan, DeleteEmailBtn } from "./styles";

interface Props {
  email: string;
  handleDeleteEmail: (id: string) => void;
  id: string;
}

const EmailItem = ({ id, email, handleDeleteEmail }: Props) => {
  return (
    <ItemWrapper
      key={id}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <EmailSpan>{email}</EmailSpan>
      <DeleteEmailBtn
        onClick={() => handleDeleteEmail(id)}
        icon={<TrashBlackIcon />}
      />
    </ItemWrapper>
  );
};

export default EmailItem;
