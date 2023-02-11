import React, { useRef, useEffect, useState, useContext } from "react";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import { message } from "antd";
import { Editor as TitleEditor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import { useDebounce } from "@/hooks";
import { toolbarOptions } from "@/constants";
import { StoryCreationContext, StoryCreationDataType } from "@/context";
import { TitleEditorWrapper, EditorTitle, EditorFocusArea } from "./styles";

const Editor = () => {
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [convertedContent, setConvertedContent] = useState(
    storyCreationData.step1.title
  );
  const debouncedData = useDebounce(convertedContent, 1000);
  const blocksFromHTML = convertFromHTML(storyCreationData.step1.title);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )
    )
  );
  const editor = useRef(null);

  useEffect(() => {
    const editorCurrent = editor?.current as any;
    if (editorCurrent) {
      editorCurrent.focusEditor();
    }
  }, []);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    if (html.length && html !== "<p></p>") {
      setConvertedContent(html);
    }
  }, [editorState]);

  useEffect(() => {
    if (
      setStoryCreationData &&
      debouncedData !== storyCreationData.step1.title
    ) {
      //todo need to set this to store after sending successful request to back end
      setStoryCreationData(
        (ps: StoryCreationDataType): StoryCreationDataType => ({
          ...ps,
          step1: {
            title: debouncedData,
            background: ps.step1.background,
          },
        })
      );
      message.success("Your changes have been successfully saved!");
    }
  }, [debouncedData, storyCreationData, setStoryCreationData]);

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
