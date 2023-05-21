import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const ContactsWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  flex-wrap: wrap;
  padding: 0 10%;
  margin-top: 6.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 5.25rem;
     padding: 0 10%;
     justify-content: center;
  `};
`;

export const SocialLinksWrapper = styled.div`
  ${FlexBoxEnum.CenterHorizontal}
  flex-wrap: wrap;

  ${inLessThan(BreakpointEnums.mobile)`
    width: 100%;
    margin-top: 1.5rem;
    justify-content: space-between;
  `};
`;

export const SocialLink = styled.a`
  font-size: 0.875rem;
  line-height: 1rem;
  margin-right: 1.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin: 0;
  `};
`;

export const TermsText = styled.p`
  margin-bottom: 0;

  ${inLessThan(BreakpointEnums.mobile)`
    text-align: center;
    margin-top: 1.5rem;
  `};
`;
