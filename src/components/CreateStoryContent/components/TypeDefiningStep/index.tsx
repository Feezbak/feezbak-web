import React, { useState } from "react";
import { useResponsive } from "@/hooks";
import { Drawer } from "antd";
import CreationWrapper from "./components/CreationWrapper";
import Preview from "@shared/Preview";

const TypeDefiningStep = () => {
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

export default TypeDefiningStep;
