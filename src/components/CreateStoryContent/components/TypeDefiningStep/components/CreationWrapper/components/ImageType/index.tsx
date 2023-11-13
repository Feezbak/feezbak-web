import { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { uploadImageToStory } from "@/api";
import { UploadArea } from "@/shared";
import useRequest from "@ahooksjs/use-request";
import UploadList from "./components/UploadList";
import { opacityAnimation } from "@assets/framerAnimations";
import { ImageTypeWrapper, ImageTypeTitle, ImageUploadArea } from "./styles";

const ImageType = () => {
  const { id: storyId } = useParams();
  const { setImageAttached, setSelectedImgSrc, setNewImages } =
    useContext(StoryCreationContext);

  const { run: uploadToServer, loading: uploadLoading } = useRequest(
    (payload) => uploadImageToStory(storyId!, payload),
    {
      manual: true,
      onSuccess: (resp: any) => {
        setImageAttached(!!resp.data.length);
        setSelectedImgSrc(`${resp.data[0].src}`);
        setNewImages(resp.data);
      },
      onError: async (error: any) => {
        await message.error(error?.response?.data?.message);
      },
    }
  );

  return (
    <ImageTypeWrapper {...opacityAnimation}>
      <ImageTypeTitle>
        Include the images you want people to vote
      </ImageTypeTitle>
      <ImageUploadArea>
        <UploadArea
          handleUpload={uploadToServer}
          loading={uploadLoading}
          title="Images"
          description="Add more Images"
        />
        <UploadList />
      </ImageUploadArea>
    </ImageTypeWrapper>
  );
};

export default ImageType;
