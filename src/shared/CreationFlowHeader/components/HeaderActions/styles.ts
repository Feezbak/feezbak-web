import styled from "styled-components";
import { Space } from "antd";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const HeaderActionsWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.JustifyEndHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
    margin-top: 1rem;
  `}
`;

export const SpaceWrapper = styled(Space)`
  justify-content: flex-end;

  ${inLessThan(BreakpointEnums.mobile)`
    justify-content: space-between;
    width: 100%;
  `}
`;
