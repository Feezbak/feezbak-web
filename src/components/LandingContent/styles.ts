import styled, { css } from "styled-components";
import { inGreaterThan, inLessThan, prop } from "@/helpers";
import { BreakpointEnums, StyleEnums } from "@/enums";

export const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const titleStyles = css`
  line-height: 3rem;
  font-weight: bolder;
`;

export const SectionTitle = styled.h2<{ readonly $spanColor?: string }>`
  ${titleStyles};
  font-size: 3rem;
  margin-bottom: 0;
  font-weight: bold;
  white-space: nowrap;

  span {
    white-space: nowrap;
    font-weight: bold;
    color: ${prop("$spanColor")};
  }

  ${inLessThan(BreakpointEnums.mobile)`
    font-size: 2rem;
    line-height: 2.5rem;
  `};
`;

export const SectionTitleSecondary = styled.h2<{
  readonly $color: string;
}>`
  ${titleStyles};
  transition: 0.4s;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${prop("$color")};
  width: 100%;
  margin-bottom: 5rem;
  &:last-child {
    margin-bottom: 0;
  }

  ${inLessThan(BreakpointEnums.mobile)`
     margin: 2.5rem 0 1rem 0;
     line-height: 2rem;
     font-size: 1.75rem;
     color: ${StyleEnums.gray1};
  `};
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;

export const SectionWrapper = styled.section<{ readonly $bkg?: string }>`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 9.375rem;
  border-radius: 5rem;
  background: ${prop("$bkg")};
  ${inLessThan(BreakpointEnums.mobile)`
   flex-direction: column;
   margin-top: 2rem;
   width: 85vw;
   border-radius: 2rem;
  `};
`;

export const TitleWrapper = styled.div`
  width: 50%;
  padding-right: 10vw;

  ${inLessThan(BreakpointEnums.sm)`
     width: 100%;
     padding: 0;
     img {
       width: 100%;
     }
  `};
  ${inGreaterThan(BreakpointEnums.sm)`
     img {
       display: none;
     }
  `};
`;
