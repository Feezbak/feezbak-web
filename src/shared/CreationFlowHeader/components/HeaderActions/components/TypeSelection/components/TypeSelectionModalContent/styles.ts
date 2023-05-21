import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

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
`;

export const SectionWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  section:nth-of-type(1) {
    margin-right: 2rem;
  }
`;
