import { useCallback, useContext } from "react";
import Image from "./components/Image";
import { AnimatePresence } from "framer-motion";
import { message } from "antd";
import { StoryCreationContext } from "@/context";
import { deleteUploadedImgById } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { uploadListSlickSettings } from "@/constants";
import { UploadListWrapper } from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const UploadList = () => {
  const { step2, setSelectedImgSrc, deleteImage } =
    useContext(StoryCreationContext);
  const { imageVoting } = step2;
  const { id: storyId } = useParams();

  const { run: runDeleteImgById } = useRequest(
    (id) => deleteUploadedImgById(storyId!, id),
    {
      manual: true,
      onError: (error: any) => {
        message.error(getErrorMessage(error));
      },
    }
  );

  const handleDelete = async (id: string) => {
    const resp = await runDeleteImgById(id);
    if (resp?.data === id) {
      const oldImagesArr = [...imageVoting.images];
      const deleteItemIndex = oldImagesArr.findIndex((item) => item.id === id);
      const deleteItemSrc = oldImagesArr[deleteItemIndex].src;
      oldImagesArr.splice(deleteItemIndex, 1);
      deleteImage(id);
      if (deleteItemSrc === step2?.imageVoting?.selectedImgSrc) {
        setSelectedImgSrc("");
      }
    }
  };

  const handleSelect = (src: string) => {
    setSelectedImgSrc(src);
  };

  const isSelected = useCallback(
    (src: string) => {
      return src === step2?.imageVoting?.selectedImgSrc;
    },
    [step2]
  );

  return !!imageVoting.images.length ? (
    <UploadListWrapper>
      <AnimatePresence initial={false}>
        <Slider {...uploadListSlickSettings}>
          {imageVoting.images.map(({ id, src }) => (
            <Image
              isSelected={isSelected(src)}
              key={id}
              id={id}
              src={
                src.startsWith("http")
                  ? src
                  : `${process.env.REACT_APP_API_URL}/${src}`
              }
              handleDelete={handleDelete}
              handleSelect={handleSelect}
            />
          ))}
        </Slider>
      </AnimatePresence>
    </UploadListWrapper>
  ) : null;
};

export default UploadList;
