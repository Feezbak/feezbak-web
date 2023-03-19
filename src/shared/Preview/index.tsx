import React, { useContext, useEffect, useMemo, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { colorPickerMainColors } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "../ResponsePreviewBtn";
import PreviewSlider from "./components/PreviewSlider";
import { useDebounce } from "@/hooks";
import DOMPurify from "dompurify";
import {
  ResponseTypeEnum,
  StoryStepEnum,
  StoryTypeEnum,
  StyleEnums,
} from "@/enums";
import {
  opacityAnimation,
  opacityWithScaleAnimation,
} from "@assets/framerAnimations";
import {
  PreviewFlowWrapper,
  CircleColorPicker,
  ColorPickerBtn,
  ColorPickerWrapper,
  PreviewFlow,
  ResponseTitleWrapper,
  SquareBtn,
  Responses,
  TitlePreview,
} from "./styles";

const Preview = () => {
  const [isHovered, setHoverState] = useState(false);
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const {
    step1,
    step2,
    currentStep,
    setPreviewBackground,
    setImageSquareState,
  } = useContext(StoryCreationContext);
  const { imageVoting } = step2;
  const [color, setColor] = useState(step1.background);
  const [isSquare, setSquareState] = useState(step2.imageVoting.isSquare);
  const debouncedColorData = useDebounce(color, 1000);
  const debouncedIsSquareData = useDebounce(isSquare, 1000);

  const createMarkup = useMemo(() => {
    return {
      __html:
        !step1.title.length || step1.title === "<p></p>"
          ? "<h3>Do you like my jacket?</h3>"
          : DOMPurify.sanitize(step1.title),
    };
  }, [step1]);

  useEffect(() => {
    if (debouncedColorData !== step1.background) {
      setPreviewBackground(debouncedColorData);
    }
  }, [debouncedColorData, setPreviewBackground, step1]);

  useEffect(() => {
    setImageSquareState(debouncedIsSquareData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedIsSquareData]);

  const hasOutline = useMemo(
    () => color.toUpperCase() === StyleEnums.white,
    [color]
  );

  const titleShadowColor = useMemo(() => {
    if (step1.titleColor === color.toUpperCase()) {
      if (color !== (StyleEnums.black as string)) {
        return StyleEnums.black as string;
      } else {
        return StyleEnums.white as string;
      }
    }
    return "transparent";
  }, [step1.titleColor, color]);

  const coverImgSrc = useMemo(() => step2.imageVoting.selectedImgSrc, [step2]);

  const responseButtons = useMemo(
    () => step2.imageVoting.response.responseBtnList,
    [step2]
  );

  const hasButtonsResp = useMemo(
    () =>
      step2.imageVoting.response.responseType === ResponseTypeEnum.COMBINED ||
      step2.imageVoting.response.responseType ===
        ResponseTypeEnum.BUTTON_RESPONSE,
    [step2]
  );

  const isNotFirstStep = useMemo(
    () => currentStep !== StoryStepEnum.TITLE_STEP,
    [currentStep]
  );

  const isTextType = useMemo(
    () => step2.type === StoryTypeEnum.TEXT_VOTING,
    [step2]
  );

  const isFullHeight = useMemo(
    () => (!isNotFirstStep || isTextType || !hasButtonsResp) && !isSquare,
    [isNotFirstStep, isSquare, isTextType, hasButtonsResp]
  );

  const hasLayer = useMemo(
    () =>
      !!step2.imageVoting.selectedImgSrc.length && isNotFirstStep && !isSquare,
    [step2, isNotFirstStep, isSquare]
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
        <AnimatePresence>
          {((isHovered && coverImgSrc) || isSquare) && (
            <motion.div {...opacityAnimation} key="1">
              <SquareBtn
                icon={<MakeSquareIcon />}
                $isActive={isSquare}
                onClick={() => setSquareState((ps) => !ps)}
              />
            </motion.div>
          )}
          {(isHovered || isColorPickerOpen) && (
            <motion.div {...opacityAnimation} key="2">
              <ColorPickerBtn
                icon={<ColorPickerIcon />}
                $isActive={isColorPickerOpen}
                onClick={() => setColorPickerState((ps) => !ps)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {!!imageVoting?.images?.length && (
          <PreviewSlider
            hasCover={!!coverImgSrc?.length}
            hasLayer={hasLayer}
            isSquare={isSquare}
          />
        )}
        <ResponseTitleWrapper $isFullHeight={isFullHeight}>
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
            <ColorPickerWrapper {...opacityWithScaleAnimation}>
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
