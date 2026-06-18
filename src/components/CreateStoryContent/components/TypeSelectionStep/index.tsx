import { useState } from "react";
import { useResponsive } from "@/hooks";
import CreationWrapper from "./components/CreationWrapper";
import { Preview, PreviewMobileDrawer } from "@/shared";
import { ContentWrapper } from "../../styles";

const TypeSelectionStep = () => {
  const [isDemoDrawerOpen, setDemoDrawerState] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <ContentWrapper>
      <CreationWrapper handleDemo={() => setDemoDrawerState(true)} />
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

export default TypeSelectionStep;
