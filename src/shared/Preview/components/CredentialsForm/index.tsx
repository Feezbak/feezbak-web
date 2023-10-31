import CredentialsFormContent from "./components/CredentialsFormContent";
import { GoBackRoundIcon } from "@/icons";
import { opacityAnimation } from "@assets/framerAnimations";
import { ContactToData } from "@shared/Preview/components/Demo/types";
import { FormDrawer, CredTitle, CloseBtn, DrawerContent } from "./styles";

interface Props {
  isOpen: boolean;
  fields: string[];
  isCreationMode: boolean;
  isLoading: boolean;
  onClose: () => void;
  sendContactInfo: (info: ContactToData[]) => void;
}

const CredentialsForm = ({
  isOpen = true,
  onClose,
  fields,
  isCreationMode,
  sendContactInfo,
  isLoading,
}: Props) => {
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
          {!isCreationMode && (
            <CloseBtn onClick={onClose} icon={<GoBackRoundIcon />} />
          )}
          <CredTitle>
            The Story creator asks for your credentials, Please feel data to be
            able to send your feedback
          </CredTitle>
          <CredentialsFormContent
            fields={fields}
            isLoading={isLoading}
            isCreation={isCreationMode}
            sendContactInfo={sendContactInfo}
          />
        </DrawerContent>
      )}
    </FormDrawer>
  );
};

export default CredentialsForm;
