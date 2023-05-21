import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const PricingList = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
  ${inLessThan(BreakpointEnums.mobile)`
     width: 100%;
  `};
`;

export const PaddingWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  flex-wrap: wrap;
  padding: 5.5rem;

  ${inLessThan(BreakpointEnums.mobile)`
     padding: 2.5rem 1.5rem;
  `};
`;
