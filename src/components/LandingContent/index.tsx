import React from "react";
import NavMenu from "./components/NavMenu";
import Pricing from "./components/Pricing";

import { PageLayout } from "./styles";

const LandingContent = () => {
  return (
    <PageLayout>
      <Pricing />
      <NavMenu />
    </PageLayout>
  );
};

export default LandingContent;
