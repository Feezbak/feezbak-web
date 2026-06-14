import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const DemoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${FlexBoxEnum.CenterHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
       height: 100dvh !important;
   `};

  .ant-drawer-content-wrapper {
    box-shadow: unset;
    border-radius: 3rem;

    ${inLessThan(BreakpointEnums.mobile)`
       height: 100dvh !important;
       border-radius: unset;
    `};
  }
`;
