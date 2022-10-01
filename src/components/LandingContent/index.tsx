import React from "react";
import NavMenu from "./components/NavMenu";
import Heading from "./components/Heading";
import Pricing from "./components/Pricing";
import Incomes from "./components/Incomes";
import HowToUse from "./components/HowToUse";
import { LandingContainer } from "./styles";

const LandingContent = () => {
  return (
    <LandingContainer>
      <NavMenu />
      <Heading />
      <Incomes />
      <Pricing />
      <HowToUse />
    </LandingContainer>
  );
};

export default LandingContent;
