import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";

export const FeedbackerContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${inLessThan(BreakpointEnums.mobile)`
     height: 100dvh;
  `}

  background: ${StyleEnums.storyDefaultColor1};
  ${FlexBoxEnum.StartCenterVertical}
`;

export const PreviewFlowWrapper = styled.div`
  width: 50%;
  height: 89dvh;
  margin-top: -3rem;
  max-width: 30rem;

  ${inLessThan(BreakpointEnums.tablet)`
     margin: 0;
     width: 55%;
     height: 80dvh;
  `};
`;
