import { useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PIILayer from "./components/PIILayer";
import SelectionQuantityLayer from "./components/SelectionQuantityLayer";
import TypeInfoLayer from "./components/TypeInfoLayer";
import WelcomeLayer from "./components/WelcomeLayer";
import SuccessLayer from "./components/SuccessLayer";
import { opacityAnimation } from "@assets/framerAnimations";
import { LayersSelectionWrapper } from "./styles";
import { StoryTypeEnum } from "@/enums";

interface Props {
  type: StoryTypeEnum;
  isPIIRequested: boolean;
  isMultySelectRequested: boolean;
  handleCloseLayers: () => void;
  activeLayerNumber: number;
  setActiveLayerNumber: (state: number) => void;
}

const ClientLayers = ({
  activeLayerNumber,
  setActiveLayerNumber,
  isPIIRequested,
  isMultySelectRequested,
  type,
  handleCloseLayers,
}: Props) => {
  useEffect(() => {
    if (activeLayerNumber === 5) {
      handleCloseLayers();
    }
  }, [activeLayerNumber, handleCloseLayers]);

  const activeLayer = useMemo(() => {
    switch (activeLayerNumber) {
      case 0:
        return (
          <WelcomeLayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayerNumber(1)}
          />
        );
      case 1:
        return (
          <TypeInfoLayer
            type={type}
            handleSkip={handleCloseLayers}
            handleLayer={() =>
              setActiveLayerNumber(
                isMultySelectRequested ? (isPIIRequested ? 3 : 4) : 2
              )
            }
          />
        );
      case 2:
        return (
          <SelectionQuantityLayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayerNumber(isPIIRequested ? 3 : 4)}
          />
        );
      case 3:
        return (
          <PIILayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayerNumber(4)}
          />
        );
      case 4:
        return <SuccessLayer />;
      default:
        return (
          <WelcomeLayer
            handleSkip={handleCloseLayers}
            handleLayer={() => setActiveLayerNumber(4)}
          />
        );
    }
  }, [
    type,
    setActiveLayerNumber,
    activeLayerNumber,
    isPIIRequested,
    isMultySelectRequested,
    handleCloseLayers,
  ]);

  return (
    <LayersSelectionWrapper {...opacityAnimation}>
      <AnimatePresence>{activeLayer}</AnimatePresence>
    </LayersSelectionWrapper>
  );
};

export default ClientLayers;
