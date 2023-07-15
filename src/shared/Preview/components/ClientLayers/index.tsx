import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
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
  const activeLayer = useMemo(() => {
    return <div>dfgg</div>;
  }, []);

  return (
    <LayersSelectionWrapper>
      <AnimatePresence>{activeLayer}</AnimatePresence>
    </LayersSelectionWrapper>
  );
};

export default ClientLayers;
