import React, { useState } from "react";
import UploadArea from "./components/UploadArea";
import UploadList from "./components/UploadList";
import { ImageTypeWrapper, ImageTypeTitle, ImageUploadArea } from "./styles";

const ImageType = () => {
  const [newFileSrc, setNewFileSrc] = useState<unknown>();

  const handleBlobURL = (url: unknown) => {
    setNewFileSrc(url);
  };

  return (
    <ImageTypeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ImageTypeTitle>
        Include the images you want people to vote
      </ImageTypeTitle>
      <ImageUploadArea>
        <UploadArea sendBlobURL={handleBlobURL} />
        <UploadList newFileSrc={newFileSrc} />
      </ImageUploadArea>
    </ImageTypeWrapper>
  );
};

export default ImageType;
