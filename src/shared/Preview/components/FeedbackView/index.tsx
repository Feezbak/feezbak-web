import React, { useState } from "react";
import Demo from "../../components/Demo";
import { AnimatePresence } from "framer-motion";
import ClientLayers from "@shared/Preview/components/ClientLayers";
import { DemoWrapper } from "./styles";

interface Props {
  storyData: any;
}

const FeedbackView = ({ storyData }: Props) => {
  const {
    type,
    background,
    title,
    titleColor,
    imageVoting: { images, selectedImgSrc, isSquare },
    response: { responseBtnList },
    userInfoFields,
  } = storyData;
  const [isLayersOpen, setLayersState] = useState(true);
  console.log(storyData, 7777);

  return (
    <DemoWrapper>
      <AnimatePresence initial={false}>
        {isLayersOpen ? (
          <ClientLayers
            handleCloseLayers={() => setLayersState((ps) => !ps)}
            isPIIRequested={storyData.isInfoCollectionAllowed}
            isMultySelectRequested={storyData.isMultiple}
          />
        ) : (
          <Demo
            isCreationMode={false}
            responseButtons={responseBtnList}
            title={title}
            titleColor={titleColor}
            type={type}
            coverImgSrc={selectedImgSrc}
            images={images}
            isSquare={isSquare}
            color={background}
            userInfoFields={userInfoFields}
          />
        )}
      </AnimatePresence>
    </DemoWrapper>
  );
};

export default FeedbackView;
