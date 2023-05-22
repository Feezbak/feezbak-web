import styled from "styled-components";
import { Row } from "antd";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const NotFoundWrapper = styled(Row)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  ${FlexBoxEnum.CenterVertical}
`;

export const NotFoundIllustration = styled.img`
  width: 35%;
  ${inLessThan(BreakpointEnums.mobile)`
     width: 95%;
  `}
  ${inLessThan(BreakpointEnums.tablet)`
     width: 65%;
  `}
`;
