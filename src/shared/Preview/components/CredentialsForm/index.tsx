import React from "react";
import CredentialsFormContent from "./components/CredentialsFormContent";
import { GoBackRoundIcon } from "@/icons";
import { opacityAnimation } from "@assets/framerAnimations";
import { FormDrawer, CredTitle, CloseBtn, DrawerContent } from "./styles";

interface Props {
  isOpen: boolean;
  fields: string[];
  onClose: () => void;
}

const CredentialsForm = ({ isOpen = true, onClose, fields }: Props) => {
  return (
    <FormDrawer
      title=""
      footer={false}
      placement="bottom"
      height="100%"
      getContainer={false}
      closable={false}
      mask={false}
      onClose={onClose}
      open={isOpen}
    >
      {isOpen && (
        <DrawerContent {...opacityAnimation}>
          <CloseBtn onClick={onClose} icon={<GoBackRoundIcon />} />
          <CredTitle>
            The Story creator asks for your credentials, Please feel data to be
            able to send your feedback
          </CredTitle>
          <CredentialsFormContent fields={fields} />
        </DrawerContent>
      )}
    </FormDrawer>
  );
};

export default CredentialsForm;
