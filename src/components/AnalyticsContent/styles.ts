import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { Col } from "antd";

export const AnalyticsWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenColumnStretch}
  flex: 1;
  height: 100%;
`;
