import { useRef, useEffect, useState, useContext } from "react";
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
  const characterLimit = 60;
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

  const handleEditorStateChange = (newEditorState: any) => {
    const content = newEditorState.getCurrentContent();
    const text = content.getPlainText();
    if (text.length <= characterLimit) {
      setEditorState(newEditorState);
    } else {
      const currentContent = editorState.getCurrentContent();
      const lastBlock = currentContent.getLastBlock();
      const lastBlockText = lastBlock.getText();
      const newText = lastBlockText.slice(0, -1); // Remove the last character
      const newContent = ContentState.createFromText(newText);

      setEditorState(EditorState.push(editorState, newContent, "remove-range"));
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

  return (
    <TitleEditorWrapper>
      <EditorTitle>Type in the title of your Story</EditorTitle>
      <EditorFocusArea>
        <TitleEditor
          handlePastedText={(val) => {
            const textLength = editorState
              .getCurrentContent()
              .getPlainText().length;
            return val.length + textLength <= characterLimit;
          }}
          placeholder="Do you like my jacket?"
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={handleEditorStateChange}
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
