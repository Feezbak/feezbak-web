import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const HowToUseWrapper = styled.section`
  width: 80%;
  margin-top: 9.375rem;
  ${FlexBoxEnum.AlignStartVertical}
  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 3.5rem;
  `};
`;

export const TitleWrapper = styled.div`
  ${FlexBoxEnum.StartStartVertical}
`;

export const CardsWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenStartVertical}
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 2.5rem;
     flex-direction: column;
  `};
`;
