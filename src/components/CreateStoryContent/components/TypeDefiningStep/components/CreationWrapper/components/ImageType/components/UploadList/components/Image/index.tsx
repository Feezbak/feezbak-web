import React, { useEffect, useState } from "react";
import { TrashWhiteIcon } from "@/icons";
import { motion, usePresence, AnimatePresence } from "framer-motion";
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

  const animations = {
    layout: true,
    initial: "out",
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { type: "spring", stiffness: 500, damping: 50, mass: 1 },
  };

  useEffect(() => {
    console.log(isHovered, 9999);
  }, [isHovered]);

  return (
    <ImageBackgroundWrapper
      $srcURL={src}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      {...animations}
    >
      <AnimatePresence initial={false}>
        {isHovered && (
          <DeleteBtnWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DeleteBtn onClick={handleDeleteImage} icon={<TrashWhiteIcon />} />
          </DeleteBtnWrapper>
        )}
      </AnimatePresence>
    </ImageBackgroundWrapper>
  );
};

export default Image;
