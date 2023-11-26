import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const UploadListWrapper = styled.div`
  margin: 0 0 0 1rem;
  overflow: auto;
  overflow-y: hidden;

  .upload-list-slider {
    .slick-track {
      ${FlexBoxEnum.JustifyStartHorizontal}
    }

    .slick-slide {
      width: 100%;
      max-width: 11.875rem !important;
      height: 15.5rem;
      margin-right: 1rem;

      & div {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${inLessThan(BreakpointEnums.mobile)`
    margin: 0;
 `};
`;
