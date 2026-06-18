import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { Col } from "antd";

export const AnalyticsWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenColumnStretch}
  flex: 1;
  height: 100%;
`;

export const AnalyticsTabsWrapper = styled.div`
  flex: 1;
  overflow-y: auto;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content-holder {
    overflow-y: auto;
  }
`;
