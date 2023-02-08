import React from "react";
import Modal from "./components/Modal";
import { Backdrop } from "./styles";
import { createPortal } from "react-dom";

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
  return modalIsOpen
    ? createPortal(
        <Backdrop
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Modal
            title={title}
            text={text}
            positiveBtnAction={positiveBtnAction}
            negativeBtnAction={negativeBtnAction}
            positiveBtnText={positiveBtnText}
            negativeBtnText={negativeBtnText}
          />
        </Backdrop>,
        document.body
      )
    : null;
};

export default ConfirmModal;
