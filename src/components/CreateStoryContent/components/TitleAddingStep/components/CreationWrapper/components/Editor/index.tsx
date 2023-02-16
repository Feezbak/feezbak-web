import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { Editor as TitleEditor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useDebounce } from "@/hooks";
import rgbHex from "rgb-hex";
import { notification } from "antd";
import { AnanasOnBikeIcon } from "@/icons";
import { toolbarOptions, storyEditorConvertedContent } from "@/constants";
import { StoryCreationContext, StoryCreationDataType } from "@/context";
import { TitleEditorWrapper, EditorTitle, EditorFocusArea } from "./styles";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

const Editor = () => {
  const [api, contextHolder] = notification.useNotification();
  const editor = useRef(null);
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [convertedContent, setConvertedContent] = useState(
    storyEditorConvertedContent
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

  const openNotification = useCallback(() => {
    api.open({
      message: "Noticed Some Changes",
      description:
        "You currently made some changes and We’re pretty sure that it looks way nicer now!",
      duration: 1,
      placement: "topRight",
      className: "notification-custom-styles",
      icon: <AnanasOnBikeIcon />,
    });
  }, [api]);

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
    let titleColor = storyCreationData.step1.titleColor;
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
    if (
      titleColor !== storyCreationData.step1.titleColor ||
      html !== storyCreationData.step1.title
    ) {
      setConvertedContent({
        title: html,
        titleColor,
      });
    }
  }, [editorState, storyCreationData]);

  useEffect(() => {
    if (debouncedData.title !== storyCreationData.step1.title) {
      //todo need to set this to store after sending successful request to back end
      setStoryCreationData(
        (ps: StoryCreationDataType): StoryCreationDataType => ({
          ...ps,
          step1: {
            background: ps.step1.background,
            ...debouncedData,
          },
        })
      );

      openNotification();
    }
  }, [
    debouncedData,
    storyCreationData,
    setStoryCreationData,
    openNotification,
  ]);

  return (
    <TitleEditorWrapper>
      {contextHolder}
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
