import React, { useState } from "react";
import { useResponsive } from "@/hooks";
import CreationWrapper from "./components/CreationWrapper";
import { Preview, PreviewMobileDrawer } from "@/shared";
import { AnimatedWrapper } from "../../styles";
import { opacityAnimation } from "@assets/framerAnimations";

const TypeDefiningStep = () => {
  const [isDemoDrawerOpen, setDemoDrawerState] = useState(false);
  const { isMobile } = useResponsive();

  const handleDemo = () => {
    setDemoDrawerState(true);
  };

  return (
    <AnimatedWrapper {...opacityAnimation}>
      <CreationWrapper handleDemo={handleDemo} />
      {isMobile ? (
        <PreviewMobileDrawer
          title="Here you can check all of the changes that you have made!"
          onClose={() => setDemoDrawerState(false)}
          isOpen={isDemoDrawerOpen}
        >
          <Preview />
        </PreviewMobileDrawer>
      ) : (
        <Preview />
      )}
    </AnimatedWrapper>
  );
};

export default TypeDefiningStep;
