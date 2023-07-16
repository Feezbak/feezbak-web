import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { Button } from "antd";
import { LayerWrapper } from "../../styles";

interface Props {
  handleLayer: () => void;
}

const TypeInfoLayer = ({ handleLayer }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      Type<Button onClick={handleLayer}>Next</Button>
    </LayerWrapper>
  );
};

export default TypeInfoLayer;
