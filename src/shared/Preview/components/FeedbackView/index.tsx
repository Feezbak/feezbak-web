import { useState } from "react";
import Demo from "../../components/Demo";
import { ClientLayerEnums } from "@/enums";
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
    imageVoting: { images, selectedImgSrc, isSquare },
    response: { responseBtnList },
    userInfoFields,
    isInfoCollectionAllowed,
  } = storyData;

  const [isLayersOpen, setLayersState] = useState(true);
  const [activeLayer, setActiveLayer] = useState(ClientLayerEnums.WELCOME);

  const handleCompleteFeedback = (layer: ClientLayerEnums) => {
    setActiveLayer(layer);
    setLayersState(true);
  };

  return (
    <DemoWrapper>
      <AnimatePresence initial={false}>
        {isLayersOpen ? (
          <ClientLayers
            activeLayer={activeLayer}
            setActiveLayer={setActiveLayer}
            type={storyData.type}
            handleCloseLayers={() => setLayersState((ps) => !ps)}
            isPIIRequested={storyData.isInfoCollectionAllowed}
            isMultySelectRequested={storyData.isMultiple}
            imageCount={images?.length ?? 0}
          />
        ) : (
          <Demo
            isCreationMode={false}
            responseButtons={responseBtnList}
            title={title}
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
