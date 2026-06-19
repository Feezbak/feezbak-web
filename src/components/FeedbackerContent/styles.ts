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

export const Watermark = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  opacity: 0.55;
  text-decoration: none;
  letter-spacing: 0.02em;
  z-index: 999;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    color: #fff;
  }
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

  ${inLessThan(BreakpointEnums.mobile)`
     height: 100dvh;
  `}
`;
