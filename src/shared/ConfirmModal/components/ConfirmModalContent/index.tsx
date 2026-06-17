import { dropIn } from "@/constants";
import confirmModalSrc from "@images/sammy-line-downloading.webp";
import {
  ModalWrapper,
  ModalContent,
  ImgWrapper,
  ActionsAndTextWrapper,
  Img,
  Actions,
  ActionBtn,
} from "./styles";

interface Props {
  title?: string;
  text?: string;
  positiveBtnText: string;
  negativeBtnText: string;
  positiveBtnAction: () => void;
  negativeBtnAction: () => void;
}
const ConfirmModalContent = ({
  title,
  text,
  positiveBtnAction,
  negativeBtnAction,
  positiveBtnText,
  negativeBtnText,
}: Props) => {
  return (
    <ModalWrapper
      onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ModalContent align="middle" justify="space-between" wrap>
        <ImgWrapper xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <Img src={confirmModalSrc} alt="Confirm Image" loading="lazy" />
        </ImgWrapper>
        <ActionsAndTextWrapper xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          {title?.length && <h4>{title}</h4>}
          {text?.length && <p>{text}</p>}
          <Actions>
            <ActionBtn onClick={negativeBtnAction} ghost={true} type="default">
              {negativeBtnText}
            </ActionBtn>
            <ActionBtn type="default" onClick={positiveBtnAction}>
              {positiveBtnText}
            </ActionBtn>
          </Actions>
        </ActionsAndTextWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmModalContent;
