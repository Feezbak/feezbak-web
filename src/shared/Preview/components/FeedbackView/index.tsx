import { useState } from "react";
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
    isInfoCollectionAllowed,
  } = storyData;
  const [isLayersOpen, setLayersState] = useState(true);
  const [activeLayerNumber, setActiveLayerNumber] = useState(0);

  const handleCompleteFeedback = (layer: number) => {
    setActiveLayerNumber(layer);
    setLayersState(true);
  };

  return (
    <DemoWrapper>
      <AnimatePresence initial={false}>
        {isLayersOpen ? (
          <ClientLayers
            activeLayerNumber={activeLayerNumber}
            setActiveLayerNumber={setActiveLayerNumber}
            type={storyData.type}
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
            isInfoCollectionAllowed={isInfoCollectionAllowed}
            coverImgSrc={selectedImgSrc}
            images={images}
            isMultiple={storyData.isMultiple}
            isSquare={isSquare}
            color={background}
            userInfoFields={userInfoFields}
            handleCompleteFeedback={handleCompleteFeedback}
          />
        )}
      </AnimatePresence>
    </DemoWrapper>
  );
};

export default FeedbackView;
