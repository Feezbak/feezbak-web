import React, { useContext, useEffect, useMemo, useState } from "react";
import Icon from "@ant-design/icons";
import { FeezbakWhiteIcon, ColorPickerIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { colorPickerMainColors } from "@/constants";
import { AnimatePresence } from "framer-motion";
import { useDebounce } from "@/hooks";
import DOMPurify from "dompurify";
import { StyleEnums } from "@/enums";
import { message } from "antd";
import {
  PreviewFlowWrapper,
  PreviewFlow,
  PoweredByWrapper,
  TitlePreview,
  ColorPickerBtn,
  ColorPickerWrapper,
  CircleColorPicker,
} from "./styles";

const PreviewWrapper = () => {
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [color, setColor] = useState(storyCreationData.step1.background);
  const debouncedData = useDebounce(color, 1000);

  const createMarkup = useMemo(() => {
    return {
      __html:
        !storyCreationData.step1.title.length ||
        storyCreationData.step1.title === "<p></p>"
          ? "<h3>Do you like my jacket?</h3>"
          : DOMPurify.sanitize(storyCreationData.step1.title),
    };
  }, [storyCreationData]);

  useEffect(() => {
    if (debouncedData !== storyCreationData.step1.background) {
      setStoryCreationData((ps) => ({
        ...ps,
        step1: {
          title: ps.step1.title,
          titleColor: ps.step1.titleColor,
          background: debouncedData,
        },
      }));
      const msgKey = Math.random().toString();

      message.open({
        key: msgKey,
        type: "success",
        content: "Your changes have been successfully saved!",
        duration: 1,
        onClick: () => message.destroy("msgKey"),
      });
    }
  }, [debouncedData, setStoryCreationData, storyCreationData]);

  const hasOutline = useMemo(
    () => color.toUpperCase() === StyleEnums.white,
    [color]
  );

  const titleShadowColor = useMemo(() => {
    console.log(storyCreationData.step1.titleColor, color, 777);
    if (storyCreationData.step1.titleColor === color.toUpperCase()) {
      if (color !== (StyleEnums.black as string)) {
        return StyleEnums.black as string;
      } else {
        return StyleEnums.white as string;
      }
    }
    return "transparent";
  }, [storyCreationData.step1.titleColor, color]);

  return (
    <PreviewFlowWrapper xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
      <PreviewFlow $background={color} $hasOutline={hasOutline}>
        <PoweredByWrapper>
          <p>POWERED BY</p>
          <Icon component={FeezbakWhiteIcon} />
        </PoweredByWrapper>
        <ColorPickerBtn
          icon={<ColorPickerIcon />}
          onClick={() => setColorPickerState((ps) => !ps)}
        />
        <TitlePreview
          $titleShadowColor={titleShadowColor}
          dangerouslySetInnerHTML={createMarkup}
        />
        <AnimatePresence>
          {isColorPickerOpen && (
            <ColorPickerWrapper
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CircleColorPicker
                color={color}
                colors={colorPickerMainColors}
                onChange={(color) => setColor(color.hex)}
              />
            </ColorPickerWrapper>
          )}
        </AnimatePresence>
      </PreviewFlow>
    </PreviewFlowWrapper>
  );
};

export default PreviewWrapper;
