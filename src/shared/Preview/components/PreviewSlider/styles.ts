import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const SliderContainer = styled.div`
  position: absolute;
  height: 95%;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
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
