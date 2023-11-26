import { useState, MouseEvent } from "react";
import { TrashWhiteIcon } from "@/icons";
import { AnimatePresence } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { ImageBackgroundWrapper, DeleteBtnWrapper, DeleteBtn } from "./styles";

interface Props {
  src: string;
  id: string;
  isSelected: boolean;
  handleDelete: (id: string) => void;
  handleSelect: (src: string) => void;
}

const Image = ({ src, id, handleDelete, handleSelect, isSelected }: Props) => {
  const [isHovered, setHoverState] = useState(false);

  const handleDeleteImage = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handleDelete(id);
  };

  return (
    <ImageBackgroundWrapper
      $srcURL={src}
      $isSelected={isSelected}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={() => handleSelect(src)}
    >
      <AnimatePresence initial={false}>
        {isHovered && (
          <DeleteBtnWrapper {...opacityAnimation}>
            <DeleteBtn onClick={handleDeleteImage} icon={<TrashWhiteIcon />} />
          </DeleteBtnWrapper>
        )}
      </AnimatePresence>
    </ImageBackgroundWrapper>
  );
};

export default Image;
