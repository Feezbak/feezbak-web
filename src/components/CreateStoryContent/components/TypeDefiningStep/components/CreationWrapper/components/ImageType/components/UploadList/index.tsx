import React, { useCallback, useContext, useEffect, useState } from "react";
import Image from "./components/Image";
import { AnimatePresence } from "framer-motion";
import { StoryCreationContext } from "@/context";
import { UploadListWrapper } from "./styles";
import { string } from "joi";

const fakeImagesData = [
  {
    id: "1",
    src: "https://preview.redd.it/what-an-amazing-visual-quickly-grabbed-as-phone-wallpaper-v0-nczm76mjcrv91.jpg?width=640&crop=smart&auto=webp&s=62930c49b1b95c604f5852e0cb9617c3d1722a83",
  },
  {
    id: "2",
    src: "https://cutewallpaper.org/28/computer-abs-wallpaper/95002337.jpg",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1595986630530-969786b19b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMG9uJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "4",
    src: "https://bestwallpapers.net/wp-content/uploads/2020/01/People-Girl-etc-Wallpapers-for-Mobile-Free-Download-Best-Wallpapers-22.jpeg",
  },
  {
    id: "5",
    src: "https://cutewallpaper.org/23/cute-baby-wallpaper-download-free/79518455.jpg",
  },
  {
    id: "6",
    src: "https://androidhdwallpapers.com/media/uploads/2016/08/People-iPhone-6-Plus-Wallpaper-69.jpg",
  },
];

interface Props {
  newFileSrc: unknown;
}

const UploadList = ({ newFileSrc }: Props) => {
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [images, setImages] = useState(fakeImagesData);

  useEffect(() => {
    //todo need to fetch images and set in a state
  }, []);

  const setImgSrcToStore = (imgSrc = "") =>
    setStoryCreationData((ps) => ({
      ...ps,
      step2: {
        ...ps.step2,
        imageVoting: {
          ...ps.step2.imageVoting,
          selectedImgSrc: imgSrc,
        },
      },
    }));

  const handleDelete = (id: string) => {
    const oldImagesArr = [...images];
    const deleteItemIndex = oldImagesArr.findIndex((item) => item.id === id);
    const deleteItemSrc = oldImagesArr[deleteItemIndex].src;
    oldImagesArr.splice(deleteItemIndex, 1);
    setImages(oldImagesArr);
    if (
      deleteItemSrc === storyCreationData?.step2?.imageVoting?.selectedImgSrc
    ) {
      setImgSrcToStore();
    }
  };

  const handleSelect = (src: string) => {
    setImgSrcToStore(src);
  };

  useEffect(() => {
    if (newFileSrc) {
      setImages((ps) => [
        {
          id: ps.length + 1 + "",
          src: newFileSrc as string,
        },
        ...ps,
      ]);
    }
  }, [newFileSrc]);

  const isSelected = useCallback(
    (src: string) => {
      return src === storyCreationData?.step2?.imageVoting?.selectedImgSrc;
    },
    [storyCreationData]
  );

  return (
    <UploadListWrapper>
      <AnimatePresence initial={false}>
        {images.map(({ id, src }) => (
          <Image
            isSelected={isSelected(src)}
            key={id}
            id={id}
            src={src}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </AnimatePresence>
    </UploadListWrapper>
  );
};

export default UploadList;
