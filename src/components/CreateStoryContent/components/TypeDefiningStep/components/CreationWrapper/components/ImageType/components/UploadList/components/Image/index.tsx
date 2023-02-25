import React, { useState } from "react";
import { TrashWhiteIcon } from "@/icons";
import { usePresence, AnimatePresence } from "framer-motion";
import { listItemAnimation, opacityAnimation } from "@assets/framerAnimations";
import { ImageBackgroundWrapper, DeleteBtnWrapper, DeleteBtn } from "./styles";

interface Props {
  src: string;
  id: string;
  handleDelete: (id: string) => void;
}

const Image = ({ src, id, handleDelete }: Props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [isHovered, setHoverState] = useState(false);

  const handleDeleteImage = () => {
    handleDelete(id);
  };

  const animations = listItemAnimation(isPresent, () => safeToRemove?.());

  return (
    <ImageBackgroundWrapper
      $srcURL={src}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      {...animations}
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
