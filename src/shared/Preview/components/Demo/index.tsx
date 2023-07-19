import React, { useEffect, useMemo, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "@/shared/ResponsePreviewBtn";
import PreviewSlider from "@/shared/Preview/components/PreviewSlider";
import CredentialsForm from "@/shared/Preview/components/CredentialsForm";
import { dynamicFontSizeHelpers } from "@helpers/dynamicFontSizeHelpers";
import { StoryStepEnum, StoryTypeEnum, StyleEnums } from "@/enums";
import DOMPurify from "dompurify";
import { DemoProps } from "./types";
import { colorPickerMainColors } from "@/constants";
import {
  opacityAnimation,
  opacityWithScaleAnimation,
} from "@assets/framerAnimations";
import {
  CircleColorPicker,
  ColorPickerBtn,
  ColorPickerWrapper,
  PreviewFlow,
  Responses,
  ResponseTitleWrapper,
  SquareBtn,
  TitlePreview,
} from "./styles";

const Demo = ({
  color,
  title,
  titleColor,
  userInfoFields,
  responseButtons,
  isSquare,
  coverImgSrc,
  type,
  isHovered = false,
  isInfoCollectionAllowed = false,
  isCreationMode = true,
  isColorPickerOpen = false,
  colorPickerOnChange,
  squareBtnHandler,
  colorPickerBtnHandler,
  flowMouseLeave,
  flowMouseEnter,
  images,
  currentStep,
}: DemoProps) => {
  const [isCredentialDrawerOpen, setCredentialDrawerState] = useState(false);

  useEffect(() => {
    isCreationMode &&
      setCredentialDrawerState(
        currentStep === StoryStepEnum.SHARE_SETTINGS_STEP &&
          isInfoCollectionAllowed
      );
  }, [currentStep, isCreationMode, isInfoCollectionAllowed]);

  const isNotFirstStep = useMemo(
    () => currentStep !== StoryStepEnum.TITLE_STEP,
    [currentStep]
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

  const createMarkup = useMemo(() => {
    return {
      __html:
        !title.length || title === "<p></p>"
          ? "<h3>Do you like my jacket?</h3>"
          : DOMPurify.sanitize(title),
    };
  }, [title]);

  const fields = useMemo(
    () => userInfoFields.map((userField) => userField.label),
    [userInfoFields]
  );

  const hasButtonsResp = useMemo(
    () =>
      type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.COMBINED,
    [type]
  );

  const dynamicFontSize = useMemo(() => {
    return dynamicFontSizeHelpers(40, 60, title, "rem");
  }, [title]);

  const hasOutline = useMemo(
    () => color.toUpperCase() === StyleEnums.white,
    [color]
  );

  const hasLayer = useMemo(
    () => !!coverImgSrc?.length && isNotFirstStep && !isSquare,
    [coverImgSrc, isNotFirstStep, isSquare]
  );

  const isTextType = useMemo(
    () =>
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP,
    [type]
  );

  const isFullHeight = useMemo(
    () => (isCreationMode && !isNotFirstStep) || isTextType || !isSquare,
    [isNotFirstStep, isSquare, isTextType, isCreationMode]
  );

  const isSpaceBetween = useMemo(
    () =>
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.COMBINED,
    [type]
  );

  const isSquareBtnVisible = useMemo(
    () =>
      isCreationMode &&
      (type === StoryTypeEnum.COMBINED ||
        type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
        type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP),
    [isCreationMode, type]
  );

  useEffect(() => {
    if (isCreationMode && isTextType && squareBtnHandler) {
      squareBtnHandler(false);
    }
  }, [isCreationMode, isTextType, squareBtnHandler, isSquare]);

  return (
    <>
      <PreviewFlow
        $background={color}
        $hasOutline={hasOutline}
        $isSquare={isSquare}
        $hasBorderRadius={!isCreationMode}
        onMouseLeave={() => flowMouseLeave?.(false)}
        onMouseEnter={() => flowMouseEnter?.(true)}
        {...opacityWithScaleAnimation}
      >
        <AnimatePresence>
          {((isHovered && coverImgSrc && squareBtnHandler) || isSquare) &&
            isSquareBtnVisible && (
              <motion.div {...opacityAnimation} key="1">
                <SquareBtn
                  icon={<MakeSquareIcon />}
                  $isActive={isSquare}
                  onClick={() => squareBtnHandler?.(!isSquare)}
                />
              </motion.div>
            )}
          {(isHovered || isColorPickerOpen) && (
            <motion.div {...opacityAnimation} key="2">
              <ColorPickerBtn
                icon={<ColorPickerIcon />}
                $isActive={isColorPickerOpen}
                onClick={colorPickerBtnHandler}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {!!images.length && (
          <PreviewSlider
            images={images}
            hasCover={!!coverImgSrc?.length}
            hasLayer={hasLayer || !isCreationMode}
            isSquare={isSquare}
          />
        )}
        <ResponseTitleWrapper
          $isFullHeight={isFullHeight}
          $justifyContent={isSpaceBetween}
        >
          <TitlePreview
            dangerouslySetInnerHTML={createMarkup}
            $fontSize={dynamicFontSize}
            $titleShadowColor={titleShadowColor}
            $isTextTypeWithBtnResp={
              type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP
            }
          />
          {(isNotFirstStep || !isCreationMode) && hasButtonsResp && (
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
                onChange={(color) => colorPickerOnChange?.(color.hex)}
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
    </>
  );
};

export default Demo;
