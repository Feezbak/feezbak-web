import styled from "styled-components";
import { Col } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const CreationFlowWrapper = styled(Col)`
  padding: 4rem 4rem 4rem 0;
  height: 100%;
  ${FlexBoxEnum.SpaceBetweenCenterVertical}

  ${inLessThan(BreakpointEnums.mobile)`
    padding: 1.5rem 1rem;
  `}
`;
