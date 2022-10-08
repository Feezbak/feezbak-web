import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums } from "@/enums";

export const HowToUseWrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 9.375rem;
  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 3.5rem;
  `};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 2.5rem;
     flex-direction: column;
  `};
`;
