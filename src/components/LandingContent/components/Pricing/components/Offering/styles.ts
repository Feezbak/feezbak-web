import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums } from "@/enums";

export const OfferingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 4.5rem;
  ${inLessThan(BreakpointEnums.mobile)`
    margin: 1rem 0 2rem 0;
  `};
`;

export const Text = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.5rem;

  ${inLessThan(BreakpointEnums.mobile)`
    font-size: 0.875rem;
    line-height: 1rem;
  `};
`;

export const SelectionTypes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Type = styled.span`
  padding: 1.8rem 3rem;
  border-radius: 1.25rem;
  font-size: 1.25rem;
  line-height: 2.25rem;
  background: rgba(255, 255, 255, 0.31);

  &:first-child {
    margin-right: 0.5rem;
  }

  ${inLessThan(BreakpointEnums.mobile)`
     padding: 0.875rem 1.5rem;
     font-size: 1rem;
  `};
`;
