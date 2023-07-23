import React, { useEffect, useMemo, useRef, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "@/shared/ResponsePreviewBtn";
import PreviewSlider from "@/shared/Preview/components/PreviewSlider";
import { ResizableTextArea } from "@/shared";
import CredentialsForm from "@/shared/Preview/components/CredentialsForm";
import { StoryStepEnum, StoryTypeEnum, StyleEnums } from "@/enums";
import DOMPurify from "dompurify";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
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

interface Feedback {
  id: string;
  type: StoryTypeEnum;
  isComplete: boolean;
  isMultiple: boolean;
  responses: {
    msg: string;
    imageId?: string;
    respBtnId?: string;
  }[];
}

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
  isMultiple = false,
  isColorPickerOpen = false,
  colorPickerOnChange,
  squareBtnHandler,
  colorPickerBtnHandler,
  flowMouseLeave,
  flowMouseEnter,
  images,
  currentStep,
}: DemoProps) => {
  const { id: storyId } = useParams();
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlideId, setActiveSlide] = useState("");
  const [isCredentialDrawerOpen, setCredentialDrawerState] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    isCreationMode &&
      setCredentialDrawerState(
        currentStep === StoryStepEnum.SHARE_SETTINGS_STEP &&
          isInfoCollectionAllowed
      );
  }, [currentStep, isCreationMode, isInfoCollectionAllowed]);

  useEffect(() => {
    if (feedback) {
      if (feedback.isComplete) {
        console.log(feedback, 11111);
        //Send Request with feedback object and show Complete layer
      }
    }
  }, [feedback]);

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

  const isSquareBtnVisible = useMemo(
    () => isCreationMode && hasButtonsResp,
    [isCreationMode, hasButtonsResp]
  );

  const isTextRespRequired = useMemo(() => {
    return (
      type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP ||
      type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP
    );
  }, [type]);

  useEffect(() => {
    if (isCreationMode && isTextType && squareBtnHandler) {
      squareBtnHandler(false);
    }
  }, [isCreationMode, isTextType, squareBtnHandler, isSquare]);

  const handleTextFeedback = (msg: string) => {
    if (type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP) {
      const feedbackResult = {
        id: storyId!,
        type,
        isComplete: true,
        isMultiple: false,
        responses: [
          {
            msg,
          },
        ],
      };
      setFeedback(feedbackResult);
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP) {
      const isComplete =
        images[images.length - 1].id === activeSlideId || !isMultiple;
      const feedbackResult = {
        id: storyId!,
        type,
        isComplete,
        isMultiple,
        responses: [
          {
            msg,
            imageId: activeSlideId,
          },
        ],
      };
      if (feedback) {
        setFeedback(
          (ps) =>
            ps && {
              ...ps,
              isComplete,
              isMultiple,
              responses: [
                ...ps!.responses,
                {
                  msg,
                  imageId: activeSlideId,
                },
              ],
            }
        );
      } else {
        setFeedback(feedbackResult);
      }
      isMultiple && sliderRef?.current?.slickNext();
    }
  };

  const handleButtonFeedback = (actionData: any) => {
    if (isCreationMode) return;

    if (type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP) {
      const feedbackResult = {
        id: storyId!,
        type,
        isComplete: true,
        isMultiple: false,
        responses: [
          {
            msg: actionData.text,
            respBtnId: actionData.id,
          },
        ],
      };
      setFeedback(feedbackResult);
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP) {
      const isComplete =
        images[images.length - 1].id === activeSlideId || !isMultiple;
      const feedbackResult = {
        id: storyId!,
        type,
        isComplete,
        isMultiple,
        responses: [
          {
            msg: actionData.text,
            imageId: activeSlideId,
            respBtnId: actionData.id,
          },
        ],
      };
      if (feedback) {
        setFeedback(
          (ps) =>
            ps && {
              ...ps,
              isComplete,
              isMultiple,
              responses: [
                ...ps!.responses,
                {
                  msg: actionData.text,
                  imageId: activeSlideId,
                  respBtnId: actionData.id,
                },
              ],
            }
        );
      } else {
        setFeedback(feedbackResult);
      }
      isMultiple && sliderRef?.current?.slickNext();
    }
  };

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
            setActiveSlide={!isCreationMode ? setActiveSlide : undefined}
            ref={sliderRef}
            images={images}
            hasCover={!!coverImgSrc?.length}
            hasLayer={hasLayer || !isCreationMode}
            isSquare={isSquare}
          />
        )}
        <ResponseTitleWrapper
          $isFullHeight={isFullHeight}
          $justifyContent={hasButtonsResp}
        >
          <TitlePreview
            dangerouslySetInnerHTML={createMarkup}
            $titleShadowColor={titleShadowColor}
            $hasBtnResp={hasButtonsResp}
          />
          {(isNotFirstStep || !isCreationMode) && hasButtonsResp && (
            <Responses>
              <AnimatePresence initial={false}>
                {responseButtons.map((respBtn) => (
                  <ResponsePreviewBtn
                    key={respBtn.id}
                    text={respBtn.text}
                    action={() => handleButtonFeedback(respBtn)}
                  />
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
        {!isCreationMode && isTextRespRequired && (
          <ResizableTextArea
            isFixed={true}
            isDisabled={false}
            positionProps={{ bottom: "8%" }}
            handleSend={handleTextFeedback}
          />
        )}
      </PreviewFlow>
    </>
  );
};

export default Demo;
