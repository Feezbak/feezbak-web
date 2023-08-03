import { useRef, useEffect, useState, useContext, useMemo } from "react";
import { Editor as TitleEditor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useDebounce } from "@/hooks";
import rgbHex from "rgb-hex";
import { StyleEnums } from "@/enums";
import {
  toolbarOptions,
  storyEditorConvertedContent,
  titleMaxLength,
} from "@/constants";
import { StoryCreationContext } from "@/context";
import {
  TitleEditorWrapper,
  EditorTitle,
  EditorFocusArea,
  MaxLength,
} from "./styles";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

const Editor = () => {
  const editor = useRef(null);
  const { step1, setTitleData } = useContext(StoryCreationContext);
  const [convertedContent, setConvertedContent] = useState(
    storyEditorConvertedContent
  );
  const debouncedData = useDebounce(convertedContent, 1000);
  const blocksFromHTML = convertFromHTML(step1.title);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )
    )
  );

  const handleBeforeInput = () => {
    if (
      convertToRaw(editorState.getCurrentContent()).blocks[0].text.length >= 60
    ) {
      return "handled";
    }
  };

  useEffect(() => {
    const editorCurrent = editor?.current as any;
    if (editorCurrent) {
      editorCurrent.focusEditor();
    }
  }, []);

  useEffect(() => {
    const html = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    ).trim();
    let titleColor = step1.titleColor;
    const styleList = editorState
      .getCurrentContent()
      .getBlockMap()
      .map((block) => block?.get("characterList"))
      .toList()
      .flatten();
    styleList.forEach((style) => {
      if (style && style.indexOf("color-") === 0) {
        titleColor = `#${rgbHex(style.substring(6)).toUpperCase()}`;
      }
    });
    if (titleColor !== step1.titleColor || html !== step1.title) {
      setConvertedContent({
        title: html,
        titleColor,
      });
    }
  }, [editorState, step1]);

  useEffect(() => {
    if (debouncedData.title !== step1.title) {
      setTitleData(debouncedData);
    }
  }, [debouncedData, step1, setTitleData]);

  const currentLength = useMemo(() => {
    return convertToRaw(editorState.getCurrentContent()).blocks[0].text.length;
  }, [editorState]);

  const color = useMemo(() => {
    return currentLength === titleMaxLength
      ? StyleEnums.error
      : StyleEnums.secondaryTitle;
  }, [currentLength]);

  return (
    <TitleEditorWrapper>
      <EditorTitle>Type in the title of your Story</EditorTitle>
      <EditorFocusArea>
        <TitleEditor
          handleBeforeInput={handleBeforeInput}
          placeholder="Do you like my jacket?"
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={setEditorState}
          editorState={editorState}
          toolbar={toolbarOptions}
          toolbarOnFocus
          ref={editor}
          hashtag={{
            separator: " ",
            trigger: "#",
          }}
        />
        <MaxLength $color={color as string}>
          {currentLength}/{titleMaxLength}
        </MaxLength>
      </EditorFocusArea>
    </TitleEditorWrapper>
  );
};

export default Editor;
