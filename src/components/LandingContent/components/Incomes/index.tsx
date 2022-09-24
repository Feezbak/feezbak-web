import React from "react";
import {
  SectionWrapper,
  TitleWrapper,
  SectionTitleSecondary,
} from "@components/LandingContent/styles";
import incomesImgSrc from "@images/incomes.png";
import { StyleEnums } from "@/enums";
import { IncomesImg } from "./styles";

const Incomes = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>
        <SectionTitleSecondary $width="60" $color={StyleEnums.gray1}>
          Get your customized links for your feedback
        </SectionTitleSecondary>
        <SectionTitleSecondary $width="60" $color={StyleEnums.gray3}>
          Share it with the people you trust the most
        </SectionTitleSecondary>
        <SectionTitleSecondary $width="70" $color={StyleEnums.gray3}>
          Gather feedback and make up your mind.
        </SectionTitleSecondary>
      </TitleWrapper>
      <IncomesImg src={incomesImgSrc} alt="incomes" />
    </SectionWrapper>
  );
};

export default Incomes;
