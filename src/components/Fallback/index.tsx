import React from "react";
import { FallbackWrapper } from "./styles";
import { opacityAnimation } from "@assets/framerAnimations";
import { Spin } from "antd";

const Fallback = () => {
  return (
    <FallbackWrapper {...opacityAnimation}>
      <Spin size="large" />
    </FallbackWrapper>
  );
};

export default Fallback;
