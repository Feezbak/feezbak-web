import React, { useState } from "react";
import CreationWrapper from "./components/CreationWrapper";
import Preview from "@shared/Preview";
import { useResponsive } from "@/hooks";
import { Drawer } from "antd";

const TitleAddingStep = () => {
  const [isDemoDrawerOpen, setDemoDrawerState] = useState(false);
  const { isMobile } = useResponsive();

  const handleDemo = () => {
    setDemoDrawerState(true);
  };

  return (
    <>
      <CreationWrapper handleDemo={handleDemo} />
      {isMobile ? (
        <Drawer
          mask={false}
          title="Here you can check all of the changes that you have made!"
          onClose={() => setDemoDrawerState(false)}
          width="100%"
          open={isDemoDrawerOpen}
        >
          <Preview />
        </Drawer>
      ) : (
        <Preview />
      )}
    </>
  );
};

export default TitleAddingStep;
