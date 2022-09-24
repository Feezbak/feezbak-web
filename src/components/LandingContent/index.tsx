import React from "react";
import NavMenu from "./components/NavMenu";
import Pricing from "./components/Pricing";
import { LandingContainer } from "./styles";

const LandingContent = () => {
  return (
    <LandingContainer>
      <NavMenu />
      <Pricing />
    </LandingContainer>
  );
};

export default LandingContent;
