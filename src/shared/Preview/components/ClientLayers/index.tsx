import React, { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PIILayer from "./components/PIILayer";
import SelectionQuantityLayer from "./components/SelectionQuantityLayer";
import TypeInfoLayer from "./components/TypeInfoLayer";
import WelcomeLayer from "./components/WelcomeLayer";
import { LayersSelectionWrapper } from "./styles";

interface Props {
  isPIIRequested: boolean;
  isMultySelectRequested: boolean;
  handleCloseLayers: () => void;
}

const ClientLayers = ({
  isPIIRequested,
  isMultySelectRequested,
  handleCloseLayers,
}: Props) => {
  const [activeLayerNumber, setActiveLayerNumber] = useState(0);

  useEffect(() => {
    if (activeLayerNumber === 4) {
      handleCloseLayers();
    }
  }, [activeLayerNumber, handleCloseLayers]);

  const activeLayer = useMemo(() => {
    switch (activeLayerNumber) {
      case 0:
        return <WelcomeLayer handleLayer={() => setActiveLayerNumber(1)} />;
      case 1:
        return (
          <TypeInfoLayer
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
            handleLayer={() => setActiveLayerNumber(isPIIRequested ? 3 : 4)}
          />
        );
      case 3:
        return <PIILayer handleLayer={() => setActiveLayerNumber(4)} />;
      default:
        return <WelcomeLayer handleLayer={() => setActiveLayerNumber(4)} />;
    }
  }, [activeLayerNumber, isPIIRequested, isMultySelectRequested]);

  return (
    <LayersSelectionWrapper>
      <AnimatePresence>{activeLayer}</AnimatePresence>
    </LayersSelectionWrapper>
  );
};

export default ClientLayers;
