import React from "react";
import Modal from "react-modal";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}
const ConfirmModal = ({ modalIsOpen, closeModal }: Props) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "3s",
    },
    content: {
      color: "lightsteelblue",
      width: "10rem",
      height: "max-content",
      border: "1px solid #F5F5F5",
      boxShadow: "0px 17px 40px rgba(74, 68, 143, 0.06",
      borderRadius: "1.25rem",
      padding: "1.5rem",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Confirm Modal"
    >
      Modal Content
    </Modal>
  );
};

export default ConfirmModal;
