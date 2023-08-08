import { TrashBlackIcon } from "@/icons";
import { ItemWrapper, EmailSpan, DeleteEmailBtn } from "./styles";

interface Props {
  email: string;
  handleDeleteEmail: (id: string) => void;
  id: string;
  isDeleteDisabled: boolean;
}

const EmailItem = ({
  id,
  email,
  isDeleteDisabled,
  handleDeleteEmail,
}: Props) => {
  return (
    <ItemWrapper
      key={id}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <EmailSpan>{email}</EmailSpan>
      {!isDeleteDisabled && (
        <DeleteEmailBtn
          onClick={() => handleDeleteEmail(id)}
          icon={<TrashBlackIcon />}
        />
      )}
    </ItemWrapper>
  );
};

export default EmailItem;
