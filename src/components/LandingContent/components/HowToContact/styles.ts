import styled from "styled-components";
import { StyleEnums, BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";
import { Link } from "react-router-dom";

export const HowToContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8.75rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 3rem;
     width: 85vw;
  `};
`;

export const Title = styled.h4`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
  `};
`;

export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 3.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
    font-size: 0.875rem;
    text-align: center;
    line-height: 1rem;
    margin-bottom: 2rem;
  `};
`;

export const ContactTypes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${inLessThan(BreakpointEnums.mobile)`
     flex-direction: column;
     width: 100%;
  `};
`;

export const Contact = styled(Link)`
  background: ${StyleEnums.gray5};
  border-radius: 1.25rem;
  width: 20rem;
  padding: 2.75rem;
  text-align: center;
  cursor: pointer;
  color: ${StyleEnums.gray1};

  p {
    font-size: 1.25rem;
    line-height: 2.25rem;
    margin-bottom: 0;
    white-space: nowrap;
  }

  span {
    font-size: 2.5rem;
  }

  &:first-child {
    margin-right: 1rem;
  }

  ${inLessThan(BreakpointEnums.mobile)`
      width: 100%;
      padding: 1rem 0;
      &:first-child {
      margin: 0 0 1rem 0;
     }
     
     span {
       font-size: 1.5rem;
     }
     
     p {
       font-size: 1rem;
     }
  `};
`;
