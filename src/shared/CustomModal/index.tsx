import { ReactElement, useEffect } from "react";
import { Backdrop } from "./styles";
import { createPortal } from "react-dom";
import { opacityAnimation } from "@assets/framerAnimations";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactElement;
}
const CustomModal = ({ isOpen, closeModal, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <Backdrop onClick={closeModal} {...opacityAnimation}>
          {children}
        </Backdrop>,
        document.body
      )
    : null;
};

export default CustomModal;
