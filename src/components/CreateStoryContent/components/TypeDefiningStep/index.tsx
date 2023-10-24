import { useState } from "react";
import { useResponsive } from "@/hooks";
import CreationWrapper from "./components/CreationWrapper";
import { Preview, PreviewMobileDrawer } from "@/shared";
import { ContentWrapper } from "../../styles";

const TypeDefiningStep = () => {
  const [isDemoDrawerOpen, setDemoDrawerState] = useState(false);
  const { isMobile } = useResponsive();

  const handleDemo = () => {
    setDemoDrawerState(true);
  };

  return (
    <ContentWrapper>
      <CreationWrapper handleDemo={handleDemo} />
      {isMobile ? (
        <PreviewMobileDrawer
          title="Here you can check all of the changes that you have made!"
          onClose={() => setDemoDrawerState(false)}
          isOpen={isDemoDrawerOpen}
        >
          <Preview isCreationMode={true} />
        </PreviewMobileDrawer>
      ) : (
        <Preview isCreationMode={true} />
      )}
    </ContentWrapper>
  );
};

export default TypeDefiningStep;
