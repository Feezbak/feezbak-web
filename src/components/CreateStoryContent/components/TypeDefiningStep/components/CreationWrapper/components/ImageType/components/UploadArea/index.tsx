import React, { useContext, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { UploadFileIcon } from "@/icons";
import uuid from "react-uuid";
import { StoryCreationContext } from "@/context";
import { message } from "antd";
import { uploadImageToStory } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useParams } from "react-router-dom";
import { UploadWrapper, UploadIconWrapper } from "./styles";

const fileToDataUri = (file: File) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      event.target && resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

const UploadArea = () => {
  const { id: storyId } = useParams();
  const [dataBlobUri, setDataBlobUri] = useState<unknown>();
  const { setImageAttached, setSelectedImgSrc, setNewImage } =
    useContext(StoryCreationContext);

  const { run: uploadToServer } = useRequest(
    (payload) => uploadImageToStory(storyId!, payload),
    {
      manual: true,
      onSuccess: (resp: any) => {
        setImageAttached(true);
        setNewImage({
          id: resp.data.id,
          src: resp.data.src,
        });
        setSelectedImgSrc(resp.src);
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    if (dataBlobUri) {
      uploadToServer(dataBlobUri);
    }
  }, [dataBlobUri, uploadToServer]);

  const handleUploadedFile = (file: File) => {
    if (file) {
      fileToDataUri(file).then((dataUri) => {
        setDataBlobUri(dataUri);
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
