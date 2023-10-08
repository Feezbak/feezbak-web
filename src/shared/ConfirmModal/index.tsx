import ConfirmModalContent from "./components/ConfirmModalContent";
import CustomModal from "../CustomModal";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  title?: string;
  text?: string;
  positiveBtnText: string;
  negativeBtnText: string;
  positiveBtnAction: () => void;
  negativeBtnAction: () => void;
}
const ConfirmModal = ({
  modalIsOpen,
  closeModal,
  title,
  text,
  positiveBtnAction,
  negativeBtnAction,
  positiveBtnText,
  negativeBtnText,
}: Props) => {
  return (
    <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
      <ConfirmModalContent
        title={title}
        text={text}
        positiveBtnAction={positiveBtnAction}
        negativeBtnAction={negativeBtnAction}
        positiveBtnText={positiveBtnText}
        negativeBtnText={negativeBtnText}
      />
    </CustomModal>
  );
};

export default ConfirmModal;
