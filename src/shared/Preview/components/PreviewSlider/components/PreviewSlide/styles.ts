import styled from "styled-components";
import { ifProp, prop } from "@/helpers";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const PoweredByWrapper = styled.div<{
  readonly $hasCover: boolean;
  readonly $isSquare: boolean;
  readonly $imgSrc: string;
  readonly $hasLayer: boolean;
}>`
  ${FlexBoxEnum.StartCenterVertical}
  transition: 0.3s;
  height: ${ifProp("$isSquare", "50%", "100%")} !important;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, ${ifProp("$hasLayer", "0.65", "0")}) 100%
    ),
    url(${ifProp("$hasCover", prop("$imgSrc"), "")});
  background-position: ${ifProp("$isSquare", "top", "center")};
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;

  p {
    margin: 1.3rem 0 0.15rem 0;
    color: ${StyleEnums.white};
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 0.75rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;
