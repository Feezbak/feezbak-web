import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { ifProp } from "@/helpers";

export const SliderContainer = styled.div<{
  readonly $isCreationMode: boolean;
  readonly $isFeedbackerMobile: boolean;
}>`
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
  position: absolute;
  width: ${ifProp("$isCreationMode", "auto", "100%")};
  height: ${ifProp("$isCreationMode", "95", "100")}%;
  top: ${ifProp("$isCreationMode", "1.25rem", "unset")};
  left: ${ifProp("$isCreationMode", "1.25rem", "unset")};
  right: ${ifProp("$isCreationMode", "1.25rem", "unset")};
  margin: 0 auto;
  border-radius: 2rem;

  div {
    height: 100%;
  }

  div.slick-slider {
    width: 100%;
  }

  .slick-list {
    border-radius: ${ifProp("$isFeedbackerMobile", "unset", "2rem")};
  }

  .slick-dots {
    bottom: 0.85rem;

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

export const ProductLogo = styled.img`
  cursor: pointer;
  width: 9rem;
`;

export const PoweredByFixed = styled.div`
  position: fixed;
  height: unset !important;
  z-index: 3;
  ${FlexBoxEnum.CenterVertical}

  p {
    margin: 1.3rem 0 0.45rem 0;
    color: ${StyleEnums.white};
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 0.75rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;
