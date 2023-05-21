import styled from "styled-components";
import { Col } from "antd";
import { FlexBoxEnum } from "@/enums";

export const StoryDetailsContentWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
  flex: 1;
  height: 100%;
  padding: 4.625rem 0 2.375rem 0;
`;
