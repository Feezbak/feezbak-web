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

export const SectionTitle = styled.h2`
  ${titleStyles};
  font-size: 3rem;
  margin-bottom: 0;

  span {
    color: ${StyleEnums.secondaryTitle};
  }
`;

export const SectionTitleSecondary = styled.h2<{
  readonly $color: string;
  readonly $width: string;
}>`
  ${titleStyles};
  font-size: 2.5rem;
  color: ${prop("$color")};
  width: ${prop("$width")}%;
  margin-bottom: 5rem;
  &:first-child {
    margin-top: 3.875rem;
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

export const SectionWrapper = styled.section`
  padding: 0 11%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 9.375rem;
`;

export const TitleWrapper = styled.div`
  flex: 1;
`;
