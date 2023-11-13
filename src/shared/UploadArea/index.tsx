import Dropzone from "react-dropzone";
import { UploadFileIcon } from "@/icons";
import { Spin } from "antd";
import { acceptedImageTypes, maxImageSize } from "@/constants";
import { fileToDataUri } from "@helpers/fileHelpers";
import { UploadWrapper, UploadIconWrapper } from "./styles";

interface Props {
  handleUpload: (fileData: unknown) => void;
  loading: boolean;
  title: string;
  description: string;
}

const UploadArea = ({ handleUpload, loading, title, description }: Props) => {
  const handleUploadedFile = async (files: File[]) => {
    if (files.length) {
      const blobArr = files.map((file) =>
        fileToDataUri(file).then((dataUri) => dataUri)
      );
      const imagesData = await Promise.all(blobArr).then((result) => result);
      handleUpload(imagesData);
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
            {loading ? <Spin size="default" /> : <UploadFileIcon />}
          </UploadIconWrapper>
          <span>{title}</span>
          <p>{description}</p>
        </UploadWrapper>
      )}
    </Dropzone>
  );
};

export default UploadArea;
