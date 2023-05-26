import React, { useContext, useEffect, useMemo, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { colorPickerMainColors } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "../ResponsePreviewBtn";
import PreviewSlider from "./components/PreviewSlider";
import CredentialsForm from "./components/CredentialsForm";
import { useDebounce } from "@/hooks";
import DOMPurify from "dompurify";
import { StoryStepEnum, StoryTypeEnum, StyleEnums } from "@/enums";
import {
  opacityAnimation,
  opacityWithScaleAnimation,
} from "@assets/framerAnimations";
import {
  CircleColorPicker,
  ColorPickerBtn,
  ColorPickerWrapper,
  PreviewFlow,
  PreviewFlowWrapper,
  Responses,
  ResponseTitleWrapper,
  SquareBtn,
  TitlePreview,
} from "./styles";

const Preview = () => {
  const [isHovered, setHoverState] = useState(false);
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const {
    step1,
    step2,
    step3,
    currentStep,
    setPreviewBackground,
    setImageSquareState,
  } = useContext(StoryCreationContext);
  const { background, title, titleColor } = step1;
  const { imageVoting, type, response } = step2;
  const { isInfoCollectionAllowed, userInfoFields } = step3;
  const [color, setColor] = useState(background);
  const [isSquare, setSquareState] = useState(imageVoting.isSquare);
  const [isCredentialDrawerOpen, setCredentialDrawerState] = useState(false);
  const debouncedColorData = useDebounce(color, 1000);
  const debouncedIsSquareData = useDebounce(isSquare, 1000);

  const createMarkup = useMemo(() => {
    return {
      __html:
        !title.length || title === "<p></p>"
          ? "<h3>Do you like my jacket?</h3>"
          : DOMPurify.sanitize(title),
    };
  }, [title]);

  useEffect(() => {
    setCredentialDrawerState(
      currentStep === StoryStepEnum.SHARE_SETTINGS_STEP &&
        isInfoCollectionAllowed
    );
  }, [currentStep, isInfoCollectionAllowed]);

  useEffect(() => {
    if (debouncedColorData !== background) {
      setPreviewBackground(debouncedColorData);
    }
  }, [debouncedColorData, setPreviewBackground, background]);

  useEffect(() => {
    setImageSquareState(debouncedIsSquareData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedIsSquareData]);

  const hasOutline = useMemo(
    () => color.toUpperCase() === StyleEnums.white,
    [color]
  );

  const titleShadowColor = useMemo(() => {
    if (titleColor === color.toUpperCase()) {
      if (color !== (StyleEnums.black as string)) {
        return StyleEnums.black as string;
      } else {
        return StyleEnums.white as string;
      }
    }
    return "transparent";
  }, [titleColor, color]);

  const coverImgSrc = useMemo(() => imageVoting.selectedImgSrc, [imageVoting]);

  const responseButtons = useMemo(() => response.responseBtnList, [response]);

  const hasButtonsResp = useMemo(
    () =>
      type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.COMBINED,
    [type]
  );

  const isNotFirstStep = useMemo(
    () => currentStep !== StoryStepEnum.TITLE_STEP,
    [currentStep]
  );

  const isTextType = useMemo(
    () =>
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP,
    [type]
  );

  const isFullHeight = useMemo(
    () => (!isNotFirstStep || isTextType || !hasButtonsResp) && !isSquare,
    [isNotFirstStep, isSquare, isTextType, hasButtonsResp]
  );

  const hasLayer = useMemo(
    () => !!imageVoting.selectedImgSrc.length && isNotFirstStep && !isSquare,
    [imageVoting, isNotFirstStep, isSquare]
  );

  const fields = useMemo(
    () => userInfoFields.map((userField) => userField.label),
    [userInfoFields]
  );

  const dynamicFontSize = useMemo(() => {
    const baseFontSize = 40;
    const maxLength = 60;
    const length = title.length;
    const percentage = (length / maxLength) * 100;
    const fontSize = baseFontSize - percentage * 0.1;

    return `${fontSize / 16}`;
  }, [title]);

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
        <ResponseTitleWrapper
          $isFullHeight={isFullHeight}
          $isTextTypeWithBtnResp={
            type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP
          }
        >
          <TitlePreview
            dangerouslySetInnerHTML={createMarkup}
            $fontSize={dynamicFontSize}
            $titleShadowColor={titleShadowColor}
            $isTextTypeWithBtnResp={
              type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP
            }
          />
          {isNotFirstStep && hasButtonsResp && (
            <Responses>
              <AnimatePresence initial={false}>
                {responseButtons.map((respBtn) => (
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
        <CredentialsForm
          fields={fields}
          isOpen={isCredentialDrawerOpen}
          onClose={() => setCredentialDrawerState(false)}
        />
      </PreviewFlow>
    </PreviewFlowWrapper>
  );
};

export default Preview;
