import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { Button } from "antd";
import { LayerWrapper } from "../../styles";

interface Props {
  handleLayer: () => void;
}

const SelectionQuantityLayer = ({ handleLayer }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      Selection<Button onClick={handleLayer}>Next</Button>
    </LayerWrapper>
  );
};

export default SelectionQuantityLayer;
