import React from "react";
import NavMenu from "./components/NavMenu";
import Heading from "./components/Heading";
import Pricing from "./components/Pricing";
import Incomes from "./components/Incomes";
import { LandingContainer } from "./styles";

const LandingContent = () => {
  return (
    <LandingContainer>
      <NavMenu />
      <Heading />
      <Incomes />
      <Pricing />
    </LandingContainer>
  );
};

export default LandingContent;
