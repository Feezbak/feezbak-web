import React from "react";
import NavMenu from "./components/NavMenu";
import Pricing from "./components/Pricing";
import Incomes from "./components/Incomes";
import { LandingContainer } from "./styles";

const LandingContent = () => {
  return (
    <LandingContainer>
      <NavMenu />
      <Pricing />
      <Incomes />
    </LandingContainer>
  );
};

export default LandingContent;
