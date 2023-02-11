import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const TitleEditorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
    line-height: 6.5rem;
    color: ${StyleEnums.gray4};
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
`;
