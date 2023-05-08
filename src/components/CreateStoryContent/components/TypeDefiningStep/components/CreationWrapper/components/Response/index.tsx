import React from "react";
import ButtonResponse from "./components/ButtonResponse";
import { opacityAnimation } from "@assets/framerAnimations";
import {
  ResponseWrapper,
  ResponseTitleAndActions,
  ResponseTypesWrapper,
} from "./styles";

const Response = () => {
  return (
    <ResponseWrapper {...opacityAnimation} transition={{ duration: 0.3 }}>
      <ResponseTitleAndActions>
        <p>Please add min 1 and max 3 preferred responses</p>
      </ResponseTitleAndActions>
      <ResponseTypesWrapper>
        <ButtonResponse />
      </ResponseTypesWrapper>
    </ResponseWrapper>
  );
};

export default Response;
