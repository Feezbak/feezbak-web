import React, { useContext, useMemo } from "react";
import Icon from "@ant-design/icons";
import { FeezbakWhiteIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import DOMPurify from "dompurify";
import {
  PreviewFlowWrapper,
  PreviewFlow,
  PoweredByWrapper,
  TitlePreview,
} from "./styles";

const PreviewWrapper = () => {
  const { storyCreationData } = useContext(StoryCreationContext);
  const createMarkup = useMemo(() => {
    return {
      __html:
        !storyCreationData.step1.title.length ||
        storyCreationData.step1.title === "<p></p>"
          ? "<h3>Do you like my jacket?</h3>"
          : DOMPurify.sanitize(storyCreationData.step1.title),
    };
  }, [storyCreationData]);

  return (
    <PreviewFlowWrapper xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
      <PreviewFlow $background={storyCreationData.step1.background}>
        <PoweredByWrapper>
          <p>POWERED BY</p>
          <Icon component={FeezbakWhiteIcon} />
        </PoweredByWrapper>
        <TitlePreview dangerouslySetInnerHTML={createMarkup} />
      </PreviewFlow>
    </PreviewFlowWrapper>
  );
};

export default PreviewWrapper;
