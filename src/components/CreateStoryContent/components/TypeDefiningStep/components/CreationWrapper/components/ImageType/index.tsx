import React from "react";
import UploadArea from "./components/UploadArea";
import UploadList from "./components/UploadList";
import { opacityAnimation } from "@assets/framerAnimations";
import { ImageTypeWrapper, ImageTypeTitle, ImageUploadArea } from "./styles";

const ImageType = () => {
  return (
    <ImageTypeWrapper {...opacityAnimation} transition={{ duration: 0.3 }}>
      <ImageTypeTitle>
        Include the images you want people to vote
      </ImageTypeTitle>
      <ImageUploadArea>
        <UploadArea />
        <UploadList />
      </ImageUploadArea>
    </ImageTypeWrapper>
  );
};

export default ImageType;
