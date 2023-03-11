import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { UploadFileIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { UploadWrapper, UploadIconWrapper } from "./styles";

const fileToDataUri = (file: File) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      event.target && resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

interface Props {
  sendBlobURL: (url: unknown) => void;
}

const UploadArea = ({ sendBlobURL }: Props) => {
  const { setImageAttached, setSelectedImgSrc } =
    useContext(StoryCreationContext);

  const handleUploadedFile = (file: File) => {
    if (file) {
      //todo send file to back-end

      fileToDataUri(file).then((dataUri) => {
        sendBlobURL(dataUri);
        setImageAttached(true);
        setSelectedImgSrc(dataUri as string);
      });
    }
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles) => handleUploadedFile(acceptedFiles[0])}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <UploadWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadIconWrapper>
            <UploadFileIcon />
          </UploadIconWrapper>
          <span>Images</span>
          <p>Add more Images</p>
        </UploadWrapper>
      )}
    </Dropzone>
  );
};

export default UploadArea;
