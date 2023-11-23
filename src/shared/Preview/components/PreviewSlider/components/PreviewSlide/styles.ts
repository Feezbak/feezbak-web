import styled from "styled-components";
import { ifProp, prop } from "@/helpers";
import { FlexBoxEnum } from "@/enums";

export const PoweredByWrapper = styled.div<{
  readonly $hasCover: boolean;
  readonly $isSquare: boolean;
  readonly $imgSrc: string;
  readonly $hasLayer: boolean;
}>`
  ${FlexBoxEnum.StartCenterVertical}
  transition: 0.3s;
  width: 100%;
  height: ${ifProp("$isSquare", "50%", "100%")} !important;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, ${ifProp("$hasLayer", "0.35", "0")}) 100%
    ),
    url(${ifProp("$hasCover", prop("$imgSrc"), "")});
  background-position: ${ifProp("$isSquare", "top", "center")};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${ifProp("$isSquare", "2", "0")}rem;
`;
