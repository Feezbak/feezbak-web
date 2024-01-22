import styled from "styled-components";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";
import { ifProp, inLessThan } from "@/helpers";

export const SliderContainer = styled.div<{
  readonly $isSquare: boolean;
  readonly $isFeedbackerMobile: boolean;
}>`
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
  position: absolute;
  width: ${ifProp("$isSquare", "auto", "100%")};
  height: ${ifProp("$isSquare", "95", "100")}%;
  top: ${ifProp("$isSquare", "1.25rem", "unset")};
  left: ${ifProp("$isSquare", "1.25rem", "unset")};
  right: ${ifProp("$isSquare", "1.25rem", "unset")};
  margin: 0 auto;
  border-radius: 2rem;

  div {
    height: 100%;

    ${inLessThan(BreakpointEnums.mobile)`
      height: 100dvh;
   `}
  }

  div.slick-slider {
    width: 100%;

    .slick-next,
    .slick-prev {
      width: 2.188rem;
      height: 2.188rem;
      z-index: 4;

      &::before {
        font-size: 2.188rem;
      }
    }

    .slick-next {
      right: 3.5%;
    }

    .slick-prev {
      left: 3.5%;
    }
  }

  .slick-list {
    border-radius: ${ifProp("$isFeedbackerMobile", "unset", "2rem")};
  }

  .slick-dots {
    bottom: ${ifProp("$isSquare", "3.375", "4.5")}rem;

    li {
      opacity: 0.4;
      background: ${StyleEnums.white};
      border-radius: 50%;
      &,
      button,
      button:before {
        width: 10px;
        height: 10px;
        content: " ";
      }
    }
    li.slick-active {
      background: ${StyleEnums.white};
      opacity: 1;
    }
  }
`;
