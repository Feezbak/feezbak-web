import { useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PIILayer from "./components/PIILayer";
import SelectionQuantityLayer from "./components/SelectionQuantityLayer";
import TypeInfoLayer from "./components/TypeInfoLayer";
import WelcomeLayer from "./components/WelcomeLayer";
import SuccessLayer from "./components/SuccessLayer";
import { opacityAnimation } from "@assets/framerAnimations";
import { LayersSelectionWrapper } from "./styles";
import { StoryTypeEnum, ClientLayerEnums } from "@/enums";

interface Props {
  type: StoryTypeEnum;
  isPIIRequested: boolean;
  isMultySelectRequested: boolean;
  handleCloseLayers: () => void;
  activeLayer: ClientLayerEnums;
  setActiveLayer: (state: ClientLayerEnums) => void;
  imageCount?: number;
}

const ClientLayers = ({
  activeLayer,
  setActiveLayer,
  isPIIRequested,
  isMultySelectRequested,
  type,
  handleCloseLayers,
  imageCount = 0,
}: Props) => {
  useEffect(() => {
    if (activeLayer === ClientLayerEnums.CLOSE) {
      handleCloseLayers();
    }
  }, [activeLayer, handleCloseLayers]);

  const activeLayerContent = useMemo(() => {
    switch (activeLayer) {
      case ClientLayerEnums.WELCOME:
        return (
          <WelcomeLayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayer(ClientLayerEnums.TYPE)}
            imageCount={imageCount}
            storyType={type}
          />
        );
      case ClientLayerEnums.TYPE:
        return (
          <TypeInfoLayer
            type={type}
            handleLayer={() =>
              setActiveLayer(
                isMultySelectRequested
                  ? isPIIRequested
                    ? ClientLayerEnums.PII
                    : ClientLayerEnums.CLOSE
                  : ClientLayerEnums.MULTI_SELECT
              )
            }
          />
        );
      case ClientLayerEnums.MULTI_SELECT:
        return (
          <SelectionQuantityLayer
            handleLayer={() =>
              setActiveLayer(
                isPIIRequested ? ClientLayerEnums.PII : ClientLayerEnums.CLOSE
              )
            }
          />
        );
      case ClientLayerEnums.PII:
        return (
          <PIILayer
            handleLayer={() => setActiveLayer(ClientLayerEnums.CLOSE)}
          />
        );
      case ClientLayerEnums.SUCCESS:
        return <SuccessLayer />;
      default:
        return (
          <WelcomeLayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayer(ClientLayerEnums.CLOSE)}
          />
        );
    }
  }, [
    type,
    setActiveLayer,
    activeLayer,
    isPIIRequested,
    isMultySelectRequested,
    handleCloseLayers,
  ]);

  return (
    <LayersSelectionWrapper {...opacityAnimation}>
      <AnimatePresence>{activeLayerContent}</AnimatePresence>
    </LayersSelectionWrapper>
  );
};

export default ClientLayers;
