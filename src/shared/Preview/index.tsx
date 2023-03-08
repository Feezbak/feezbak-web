import React, { useContext, useEffect, useMemo, useState } from "react";
import Icon from "@ant-design/icons";
import { StoryCreationContext } from "@/context";
import { colorPickerMainColors } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "../ResponsePreviewBtn";
import { useDebounce } from "@/hooks";
import DOMPurify from "dompurify";
import { ResponseTypeEnum, StoryTypeEnum, StyleEnums } from "@/enums";
import { opacityAnimation } from "@assets/framerAnimations";
import { ColorPickerIcon, FeezbakWhiteIcon, MakeSquareIcon } from "@/icons";
import {
  PreviewFlowWrapper,
  CircleColorPicker,
  ColorPickerBtn,
  ColorPickerWrapper,
  PoweredByWrapper,
  PreviewFlow,
  ResponseTitleWrapper,
  SquareBtn,
  Responses,
  TitlePreview,
} from "./styles";

const Preview = () => {
  const [isHovered, setHoverState] = useState(false);
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [color, setColor] = useState(storyCreationData.step1.background);
  const [isSquare, setSquareState] = useState(
    storyCreationData.step2.imageVoting.isSquare
  );
  const debouncedColorData = useDebounce(color, 1000);
  const debouncedIsSquareData = useDebounce(isSquare, 1000);

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
    if (debouncedColorData !== storyCreationData.step1.background) {
      setStoryCreationData((ps) => ({
        ...ps,
        step1: {
          title: ps.step1.title,
          titleColor: ps.step1.titleColor,
          background: debouncedColorData,
        },
      }));
    }
  }, [debouncedColorData, setStoryCreationData, storyCreationData]);

  useEffect(() => {
    setStoryCreationData((ps) => ({
      ...ps,
      step2: {
        ...ps.step2,
        imageVoting: {
          ...ps.step2.imageVoting,
          isSquare: debouncedIsSquareData,
        },
      },
    }));
  }, [debouncedIsSquareData, setStoryCreationData]);

  const hasOutline = useMemo(
    () => color.toUpperCase() === StyleEnums.white,
    [color]
  );

  const titleShadowColor = useMemo(() => {
    if (storyCreationData.step1.titleColor === color.toUpperCase()) {
      if (color !== (StyleEnums.black as string)) {
        return StyleEnums.black as string;
      } else {
        return StyleEnums.white as string;
      }
    }
    return "transparent";
  }, [storyCreationData.step1.titleColor, color]);

  const coverImgSrc = useMemo(
    () => storyCreationData.step2.imageVoting.selectedImgSrc,
    [storyCreationData]
  );

  const responseButtons = useMemo(
    () => storyCreationData.step2.imageVoting.response.responseBtnList,
    [storyCreationData]
  );

  const hasButtonsResp = useMemo(
    () =>
      storyCreationData.step2.imageVoting.response.responseType ===
        ResponseTypeEnum.COMBINED ||
      storyCreationData.step2.imageVoting.response.responseType ===
        ResponseTypeEnum.BUTTON_RESPONSE,
    [storyCreationData]
  );

  const isNotFirstStep = useMemo(
    () => storyCreationData.currentStep !== 1,
    [storyCreationData]
  );

  const isTextType = useMemo(
    () => storyCreationData.step2.type === StoryTypeEnum.TEXT_VOTING,
    [storyCreationData]
  );

  return (
    <PreviewFlowWrapper xs={24} sm={24} md={9} lg={9} xl={8} xxl={7}>
      <PreviewFlow
        $background={color}
        $hasOutline={hasOutline}
        $isSquare={isSquare}
        onMouseLeave={() => setHoverState(false)}
        onMouseEnter={() => setHoverState(true)}
      >
        <AnimatePresence initial={false}>
          {((isHovered && coverImgSrc) || isSquare) && (
            <motion.div {...opacityAnimation} key="1">
              <SquareBtn
                icon={<MakeSquareIcon />}
                $isActive={isSquare}
                onClick={() => setSquareState((ps) => !ps)}
              />
            </motion.div>
          )}
          <PoweredByWrapper
            $hasCover={!!coverImgSrc.length}
            $imgSrc={coverImgSrc}
            $isSquare={isSquare}
            key="2"
            {...opacityAnimation}
          >
            <p>POWERED BY</p>
            <Icon component={FeezbakWhiteIcon} />
          </PoweredByWrapper>
          {(isHovered || isColorPickerOpen) && (
            <motion.div {...opacityAnimation} key="3">
              <ColorPickerBtn
                icon={<ColorPickerIcon />}
                $isActive={isColorPickerOpen}
                onClick={() => setColorPickerState((ps) => !ps)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <ResponseTitleWrapper $isFullHeight={!isNotFirstStep || isTextType}>
          <TitlePreview
            $titleShadowColor={titleShadowColor}
            dangerouslySetInnerHTML={createMarkup}
          />
          {!isTextType && isNotFirstStep && (
            <Responses>
              <AnimatePresence initial={false}>
                {hasButtonsResp &&
                  responseButtons.map((respBtn) => (
                    <ResponsePreviewBtn key={respBtn.id} text={respBtn.text} />
                  ))}
              </AnimatePresence>
            </Responses>
          )}
        </ResponseTitleWrapper>
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

export default Preview;
