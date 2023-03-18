import React, { useCallback, useContext, useEffect } from "react";
import Image from "./components/Image";
import { AnimatePresence } from "framer-motion";
import { StoryCreationContext } from "@/context";
import { UploadListWrapper } from "./styles";

const UploadList = () => {
  const { step2, setSelectedImgSrc, deleteImage } =
    useContext(StoryCreationContext);
  const { imageVoting } = step2;

  useEffect(() => {
    //todo need to fetch images and set in a state
  }, []);

  const setImgSrcToStore = (imgSrc = "") => setSelectedImgSrc(imgSrc);

  const handleDelete = (id: string) => {
    const oldImagesArr = [...imageVoting.images];
    const deleteItemIndex = oldImagesArr.findIndex((item) => item.id === id);
    const deleteItemSrc = oldImagesArr[deleteItemIndex].src;
    oldImagesArr.splice(deleteItemIndex, 1);
    deleteImage(id);
    if (deleteItemSrc === step2?.imageVoting?.selectedImgSrc) {
      setImgSrcToStore();
    }
  };

  const handleSelect = (src: string) => {
    setImgSrcToStore(src);
  };

  const isSelected = useCallback(
    (src: string) => {
      return src === step2?.imageVoting?.selectedImgSrc;
    },
    [step2]
  );

  return (
    <UploadListWrapper>
      <AnimatePresence initial={false}>
        {imageVoting.images.map(({ id, src }) => (
          <Image
            isSelected={isSelected(src)}
            key={id}
            id={id}
            src={src}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </AnimatePresence>
    </UploadListWrapper>
  );
};

export default UploadList;
