import { useContext } from "react";
import Dropzone from "react-dropzone";
import { UploadFileIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { message, Spin } from "antd";
import { uploadImageToStory } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useParams } from "react-router-dom";
import { acceptedImageTypes, maxImageSize } from "@/constants";
import { fileToDataUri } from "@helpers/fileHelpers";
import { UploadWrapper, UploadIconWrapper } from "./styles";

const UploadArea = () => {
  const { id: storyId } = useParams();
  const { setImageAttached, setSelectedImgSrc, setNewImage } =
    useContext(StoryCreationContext);

  const { run: uploadToServer, loading: uploadLoading } = useRequest(
    (payload) => uploadImageToStory(storyId!, payload),
    {
      manual: true,
      onSuccess: (resp: any) => {
        setImageAttached(true);
        setSelectedImgSrc(`${resp.data.src}`);
        setNewImage({
          id: resp.data.id,
          src: resp.data.src,
        });
      },
      onError: async (error: any) => {
        await message.error(error?.response?.data?.message);
      },
    }
  );

  const handleUploadedFile = async (files: File[]) => {
    if (files.length) {
      const blobArr = files.map((file) =>
        fileToDataUri(file).then((dataUri) => dataUri)
      );
      const imagesData = await Promise.all(blobArr).then((result) => result);
      uploadToServer(imagesData);
    }
  };

  return (
    <Dropzone
      onDrop={handleUploadedFile}
      multiple={true}
      accept={acceptedImageTypes}
      maxSize={maxImageSize}
    >
      {({ getRootProps, getInputProps }) => (
        <UploadWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadIconWrapper>
            {uploadLoading ? <Spin size="default" /> : <UploadFileIcon />}
          </UploadIconWrapper>
          <span>Images</span>
          <p>Add more Images</p>
        </UploadWrapper>
      )}
    </Dropzone>
  );
};

export default UploadArea;
