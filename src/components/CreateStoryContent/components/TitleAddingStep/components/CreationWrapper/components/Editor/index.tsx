import React, { useRef, useEffect, useState, useContext } from "react";
import { Editor as TitleEditor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useDebounce } from "@/hooks";
import rgbHex from "rgb-hex";
import { toolbarOptions, storyEditorConvertedContent } from "@/constants";
import { StoryCreationContext } from "@/context";
import { TitleEditorWrapper, EditorTitle, EditorFocusArea } from "./styles";
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
      //todo need to set this to store after sending successful request to back end
      setTitleData(debouncedData);
    }
  }, [debouncedData, step1, setTitleData]);

  return (
    <TitleEditorWrapper>
      <EditorTitle>Type in the title of your Story</EditorTitle>
      <EditorFocusArea>
        <TitleEditor
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
      </EditorFocusArea>
    </TitleEditorWrapper>
  );
};

export default Editor;
