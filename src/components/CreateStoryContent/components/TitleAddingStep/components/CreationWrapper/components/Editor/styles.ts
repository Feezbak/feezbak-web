import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";

export const TitleEditorWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;

export const EditorTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
`;

export const EditorFocusArea = styled.div`
  width: 100%;
  min-height: 30em;

  .public-DraftEditorPlaceholder-root {
    font-size: 5.5rem;
    font-weight: 900;
    word-break: break-word;
    line-height: 6.5rem;
    color: ${StyleEnums.gray4};

    ${inLessThan(BreakpointEnums.mobile)`
      font-size: 3rem;
      line-height: 3.8rem;
    `}
  }

  .wrapper-class {
    height: 100%;
  }

  .editor-class {
    font-size: 3.75rem;
    line-height: 4rem;
    max-height: 20rem;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    word-break: break-all;
  }

  .color-picker {
    border-radius: 1rem;

    .rdw-option-wrapper {
      border-radius: 0.45rem;
      span {
        border-radius: 0.45rem;
      }
    }

    .rdw-option-active {
      box-shadow: 0 0 2px 2px ${StyleEnums.primary};
    }
  }
`;
