import styled, { css } from "styled-components";
import { StyleEnums } from "@/enums";
import { prop } from "@/helpers";

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

  span {
    color: ${prop("$spanColor")};
  }
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
  &:first-child {
    margin-top: 3rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;

export const SectionWrapper = styled.section<{ readonly $bkg?: string }>`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9.375rem;
  border-radius: 5rem;
  background: ${prop("$bkg")};
`;

export const TitleWrapper = styled.div`
  flex: 1;
  margin-right: 18rem;
`;
