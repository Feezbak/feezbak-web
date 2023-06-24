import React, { useEffect } from "react";
import Modal from "./components/Modal";
import { Backdrop } from "./styles";
import { createPortal } from "react-dom";
import { opacityAnimation } from "@assets/framerAnimations";

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
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [modalIsOpen]);

  return modalIsOpen
    ? createPortal(
        <Backdrop onClick={closeModal} {...opacityAnimation}>
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
