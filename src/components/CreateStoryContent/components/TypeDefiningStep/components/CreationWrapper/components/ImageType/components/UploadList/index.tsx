import { useCallback, useContext } from "react";
import Image from "./components/Image";
import { AnimatePresence } from "framer-motion";
import { message } from "antd";
import { StoryCreationContext } from "@/context";
import { deleteUploadedImgById } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useParams } from "react-router-dom";
import { UploadListWrapper } from "./styles";

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
        message.error(error?.response?.data?.message);
      },
    }
  );

  const setImgSrcToStore = (imgSrc = "") => setSelectedImgSrc(imgSrc);

  const handleDelete = async (id: string) => {
    const resp = await runDeleteImgById(id);
    if (resp?.data === id) {
      const oldImagesArr = [...imageVoting.images];
      const deleteItemIndex = oldImagesArr.findIndex((item) => item.id === id);
      const deleteItemSrc = oldImagesArr[deleteItemIndex].src;
      oldImagesArr.splice(deleteItemIndex, 1);
      deleteImage(id);
      if (deleteItemSrc === step2?.imageVoting?.selectedImgSrc) {
        setImgSrcToStore();
      }
    }
  };

  const handleSelect = (src: string) => {
    setImgSrcToStore(src);
  };

  const isSelected = useCallback(
    (src: string) => {
      return src === step2?.imageVoting?.selectedImgSrc;
    },
    [step2]
  );

  return imageVoting.images.length ? (
    <UploadListWrapper>
      <AnimatePresence initial={false}>
        {imageVoting.images.map(({ id, src }) => (
          <Image
            isSelected={isSelected(src)}
            key={id}
            id={id}
            src={`${process.env.REACT_APP_API_URL}/${src}`}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </AnimatePresence>
    </UploadListWrapper>
  ) : null;
};

export default UploadList;
