import styled from "styled-components";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";

export const SectionTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  margin: 1.25rem 0 1rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const TypeSelectionModalWrapper = styled.div`
  ${FlexBoxEnum.AlignStartVertical}

  ${inLessThan(BreakpointEnums.mobile)`
      justify-content: flex-start
  `}
`;

export const SectionWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
      flex-direction: column;
      justify-content: flex-start;
   `}

  section:nth-of-type(1) {
    margin-right: 2rem;
    ${inLessThan(BreakpointEnums.mobile)`
      margin: 0 0 1rem 0;
    `}
  }
`;
