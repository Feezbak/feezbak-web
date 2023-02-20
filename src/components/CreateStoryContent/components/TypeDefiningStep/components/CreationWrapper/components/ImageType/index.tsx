import React from "react";
import UploadArea from "./components/UploadArea";
import UploadList from "./components/UploadList";
import { ImageTypeWrapper, ImageTypeTitle, ImageUploadArea } from "./styles";

const ImageType = () => {
  return (
    <ImageTypeWrapper>
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
