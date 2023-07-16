import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { Button } from "antd";
import { LayerWrapper } from "../../styles";

interface Props {
  handleLayer: () => void;
}

const PIILayer = ({ handleLayer }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      PII<Button onClick={handleLayer}>Next</Button>
    </LayerWrapper>
  );
};

export default PIILayer;
