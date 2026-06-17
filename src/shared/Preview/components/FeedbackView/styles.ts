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
    box-shadow: none !important;
    border-radius: 3rem;
    overflow: hidden;

    ${inLessThan(BreakpointEnums.mobile)`
       height: 100dvh !important;
       border-radius: unset;
    `};
  }

  .ant-drawer-content {
    border-radius: 3rem;
    overflow: hidden;

    ${inLessThan(BreakpointEnums.mobile)`
       border-radius: unset;
    `};
  }
`;
