import React from "react";
import { HowToUseWrapper, TitleWrapper } from "./styles";
import { SectionTitle } from "../../styles";
import { StyleEnums } from "@/enums";

const HowToUse = () => {
  return (
    <HowToUseWrapper>
      <TitleWrapper>
        <SectionTitle $spanColor={StyleEnums.primary}>
          Everything you need
          <span> to make up your mind.</span>
        </SectionTitle>
      </TitleWrapper>
    </HowToUseWrapper>
  );
};

export default HowToUse;
