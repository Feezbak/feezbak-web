import { dropIn } from "@/constants";
import { ModalWrapper } from "./styles";

interface Props {
  storyId?: string;
  imageId?: string;
  respBtnId?: string;
}

const CommentsModalContent = ({ storyId, imageId, respBtnId }: Props) => {
  console.log(storyId, imageId, respBtnId, 999);
  return (
    <ModalWrapper
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></ModalWrapper>
  );
};

export default CommentsModalContent;
