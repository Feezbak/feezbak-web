import styled from "styled-components";
import { Col } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const PreviewFlowWrapper = styled(Col)`
  padding: 4rem 0;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
     padding-right: 2.5%;
     padding-left: 2.5%;
  `}

   ${inLessThan(BreakpointEnums.md)`
     padding-right: 25%;
     padding-left: 25%;
  `}

   ${inLessThan(BreakpointEnums.sm)`
     padding: 10% 20%;
  `}

  ${inLessThan(BreakpointEnums.xs)`
     padding: 5%;
  `}
`;
