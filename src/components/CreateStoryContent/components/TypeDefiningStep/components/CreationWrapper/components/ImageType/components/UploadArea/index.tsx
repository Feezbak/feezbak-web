import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { UploadFileIcon } from "@/icons";
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
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (file) {
      //todo send file to back-end
      fileToDataUri(file).then((dataUri) => {
        sendBlobURL(dataUri);
      });
    }
  }, [file, sendBlobURL]);

  return (
    <Dropzone
      onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
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
