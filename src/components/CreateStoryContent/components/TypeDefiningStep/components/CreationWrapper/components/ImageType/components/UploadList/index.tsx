import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "./components/Image";
import { AnimatePresence } from "framer-motion";
import { StoryCreationContext } from "@/context";
import { UploadListWrapper } from "./styles";

interface Props {
  newFileSrc: unknown;
}

type ImageType = {
  id: string;
  src: string;
};

const UploadList = ({ newFileSrc }: Props) => {
  const { step2, setSelectedImgSrc } = useContext(StoryCreationContext);
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    //todo need to fetch images and set in a state
  }, []);

  const setImgSrcToStore = (imgSrc = "") => setSelectedImgSrc(imgSrc);

  const handleDelete = (id: string) => {
    const oldImagesArr = [...images];
    const deleteItemIndex = oldImagesArr.findIndex((item) => item.id === id);
    const deleteItemSrc = oldImagesArr[deleteItemIndex].src;
    oldImagesArr.splice(deleteItemIndex, 1);
    setImages(oldImagesArr);
    if (deleteItemSrc === step2?.imageVoting?.selectedImgSrc) {
      setImgSrcToStore();
    }
  };

  const handleSelect = (src: string) => {
    setImgSrcToStore(src);
  };

  useEffect(() => {
    if (newFileSrc) {
      setImages((ps) => [
        {
          id: ps.length + 1 + "",
          src: newFileSrc as string,
        },
        ...ps,
      ]);
    }
  }, [newFileSrc]);

  const isSelected = useCallback(
    (src: string) => {
      return src === step2?.imageVoting?.selectedImgSrc;
    },
    [step2]
  );

  return (
    <UploadListWrapper>
      <AnimatePresence initial={false}>
        {images.map(({ id, src }) => (
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
