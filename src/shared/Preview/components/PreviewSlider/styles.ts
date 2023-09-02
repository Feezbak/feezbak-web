import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { ifProp } from "@/helpers";

export const SliderContainer = styled.div<{
  readonly $isCreationMode: boolean;
}>`
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

  .slick-list {
    border-radius: 2rem;
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
