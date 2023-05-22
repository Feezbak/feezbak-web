import styled from "styled-components";
import { StyleEnums, BreakpointEnums, FlexBoxEnum } from "@/enums";
import { inLessThan } from "@/helpers";
import { Button } from "antd";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 5.25rem 0 1.75rem 0;
  margin-top: 15vh;
  background-color: ${StyleEnums.pink};
  ${FlexBoxEnum.CenterVertical}

  ${inLessThan(BreakpointEnums.mobile)`
     margin-top: 4rem;
     padding: 3.25rem 0;
  `};
`;

export const BenefitsHeading = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 3.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
     font-size: 1.125rem;
     line-height: 1rem;
     margin-bottom: 1.5rem;
  `};
`;

export const FooterMainTitle = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  width: 80%;
  margin-bottom: 3.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
     font-size: 1.75rem;
     line-height: 2rem;
     margin-bottom: 2rem;
  `};
`;

export const TryForFreeBtn = styled(Button)`
  background-color: ${StyleEnums.black};
  color: ${StyleEnums.white};
  padding: 1rem 6.5rem;
  border-radius: 2.5rem;
  height: unset;
`;
