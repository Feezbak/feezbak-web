import React, { useState } from "react";
import UploadArea from "./components/UploadArea";
import UploadList from "./components/UploadList";
import Response from "./components/Response";
import { opacityAnimation } from "@assets/framerAnimations";
import { ImageTypeWrapper, ImageTypeTitle, ImageUploadArea } from "./styles";

const ImageType = () => {
  const [newFileSrc, setNewFileSrc] = useState<unknown>();

  const handleBlobURL = (url: unknown) => {
    setNewFileSrc(url);
  };

  return (
    <ImageTypeWrapper {...opacityAnimation} transition={{ duration: 0.3 }}>
      <ImageTypeTitle>
        Include the images you want people to vote
      </ImageTypeTitle>
      <ImageUploadArea>
        <UploadArea sendBlobURL={handleBlobURL} />
        <UploadList newFileSrc={newFileSrc} />
      </ImageUploadArea>
      <Response />
    </ImageTypeWrapper>
  );
};

export default ImageType;
