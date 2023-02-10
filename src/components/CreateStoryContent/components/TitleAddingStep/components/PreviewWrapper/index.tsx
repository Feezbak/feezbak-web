import React from "react";
import { PreviewFlowWrapper, PreviewFlow, PoweredByWrapper } from "./styles";
import Icon from "@ant-design/icons";
import { FeezbakWhiteIcon } from "@/icons";

const PreviewWrapper = () => {
  return (
    <PreviewFlowWrapper xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
      <PreviewFlow>
        <PoweredByWrapper>
          <p>POWERED BY</p>
          <Icon component={FeezbakWhiteIcon} />
        </PoweredByWrapper>
      </PreviewFlow>
    </PreviewFlowWrapper>
  );
};

export default PreviewWrapper;
