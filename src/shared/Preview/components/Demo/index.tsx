import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "@/shared/ResponsePreviewBtn";
import PreviewSlider from "@/shared/Preview/components/PreviewSlider";
import { ResizableTextArea } from "@/shared";
import CredentialsForm from "@/shared/Preview/components/CredentialsForm";
import {
  StoryStepEnum,
  StoryTypeEnum,
  StyleEnums,
  ClientLayerEnums,
} from "@/enums";
import DOMPurify from "dompurify";
import useRequest from "@ahooksjs/use-request";
import Slider from "react-slick";
import { useQuery, useOutsideClick } from "@/hooks";
import { generateFeedback, sendFeedback } from "@/api";
import { useParams } from "react-router-dom";
import { DemoProps, Feedback, ContactToData } from "./types";
import { handleResponse } from "./utils";
import { message } from "antd";
import { colorPickerMainColors, Image } from "@/constants";
import { dynamicTextColor } from "@helpers/dynamicTextColor";
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
  handleCompleteFeedback,
}: DemoProps) => {
  const colorPickerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(colorPickerRef, () => colorPickerBtnHandler?.());
  const { storyId } = useParams();
  const query = useQuery();
  const feedbackId = query.get("feedbackId");
  const guestId = query.get("guestId");
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState<Image | null>(
    images?.[0] || null
  );
  const [isCredentialDrawerOpen, setCredentialDrawerState] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [respBtnId, setRespBtnId] = useState("");

  const structureFeedbackPayload = (feedbackObj: Feedback) => {
    const feedbackData = structuredClone(feedbackObj);
    const guestData = feedbackData.contactToData;
    delete feedbackData.contactToData;
    const guestPayloadData = guestData
      ? {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }
      : {};
    guestData?.forEach((item: { field: string; value: string }) => {
      if (item.field === "firstName") {
        guestPayloadData.firstName = item.value;
      } else if (item.field === "lastName") {
        guestPayloadData.lastName = item.value;
      } else if (item.field === "phone") {
        guestPayloadData.phone = item.value;
      } else {
        guestPayloadData.email = item.value;
      }
    });
    return {
      feedback: feedbackData,
      guest: guestPayloadData,
    };
  };

  const { run: sendFeedbackResults, loading: sendFeedbackLoading } = useRequest(
    (payload, feedbackId, guestId) =>
      sendFeedback(storyId!, feedbackId, guestId, payload),
    {
      manual: true,
      onSuccess: (resp) => {
        if (resp) {
          handleCompleteFeedback?.(ClientLayerEnums.SUCCESS);
          setCredentialDrawerState(false);
        }
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  const { run: generateGuest, loading: generateGuestLoading } = useRequest(
    () => generateFeedback(storyId ?? ""),
    {
      manual: true,
      onSuccess: async (resp) => {
        const feedbackPayload = structureFeedbackPayload(feedback!);
        await sendFeedbackResults(
          feedbackPayload,
          resp.data.feedbackId,
          resp.data.guestId
        );
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    isCreationMode &&
      setCredentialDrawerState(
        currentStep === StoryStepEnum.SHARE_SETTINGS_STEP &&
          isInfoCollectionAllowed
      );
  }, [currentStep, isCreationMode, isInfoCollectionAllowed]);

  const sendFeedbackRequests = () => {
    const isGuest = !guestId && !feedbackId;
    if (isGuest) {
      (() => generateGuest())();
    } else {
      const feedbackPayload = structureFeedbackPayload(feedback!);
      (() => sendFeedbackResults(feedbackPayload, guestId, feedbackId))();
    }
  };

  useEffect(() => {
    if (feedback) {
      if (feedback.isComplete) {
        if (isInfoCollectionAllowed) {
          setCredentialDrawerState(true);
        } else {
          sendFeedbackRequests();
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedback, query]);

  const isNotFirstStep = useMemo(
    () => currentStep !== StoryStepEnum.TITLE_STEP,
    [currentStep]
  );

  const titleDynamicColor = useMemo(
    () => dynamicTextColor(color).color,
    [color]
  );

  const createMarkup = useMemo(() => {
    return {
      __html:
        !title.length || title === "<p></p>"
          ? '<p class="story-title-placeholder">Do you like my jacket?</p>'
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
    if (type === StoryTypeEnum.COMBINED) {
      handleResponse(
        type,
        feedback,
        setFeedback,
        () => sliderRef?.current?.slickNext(),
        isMultiple,
        storyId!,
        msg,
        images,
        activeSlide?.id ?? "",
        respBtnId,
        () => setRespBtnId("")
      );
    } else {
      handleResponse(
        type,
        feedback,
        setFeedback,
        () => sliderRef?.current?.slickNext(),
        isMultiple,
        storyId!,
        msg,
        images,
        activeSlide?.id ?? ""
      );
    }
  };

  const handleButtonFeedback = (actionData: any) => {
    if (isCreationMode) return;

    if (type === StoryTypeEnum.COMBINED) {
      setRespBtnId(actionData.id);
    } else {
      handleResponse(
        type,
        feedback,
        setFeedback,
        () => sliderRef?.current?.slickNext(),
        isMultiple,
        storyId!,
        "",
        images,
        activeSlide?.id ?? "",
        actionData.id
      );
    }
  };

  const handleCloseResizeText = () => {
    setRespBtnId("");
  };

  const handleSetContactInfo = (contactToData: ContactToData[]) => {
    const newFeedback = { ...structuredClone(feedback), contactToData };
    setFeedback(newFeedback);
    sendFeedbackRequests();
  };

  const checkActivity = useCallback(
    (respBtnId: string) => {
      if (feedback?.responses) {
        if (hasButtonsResp) {
          const activeSlideRespData = feedback.responses.find(
            (slide) => slide.imageId === activeSlide?.id
          );
          return activeSlideRespData?.respBtnId === respBtnId;
        }
      }
      return false;
    },
    [feedback, hasButtonsResp, activeSlide]
  );

  return (
    <>
      <PreviewFlow
        $hasBorder={!isCreationMode}
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
                  type="default"
                  icon={<MakeSquareIcon />}
                  $isActive={isSquare}
                  onClick={() => squareBtnHandler?.(!isSquare)}
                />
              </motion.div>
            )}
          {(isHovered || isColorPickerOpen) && (
            <motion.div {...opacityAnimation} key="2">
              <ColorPickerBtn
                type="default"
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
            $hasBtnResp={hasButtonsResp}
            $color={titleDynamicColor}
          />
          {(isNotFirstStep || !isCreationMode) && hasButtonsResp && (
            <Responses>
              <AnimatePresence initial={false}>
                {responseButtons.map((respBtn) => (
                  <ResponsePreviewBtn
                    disabled={generateGuestLoading || sendFeedbackLoading}
                    isActive={checkActivity(respBtn.id)}
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
            <ColorPickerWrapper
              {...opacityWithScaleAnimation}
              ref={colorPickerRef}
            >
              <CircleColorPicker
                color={color}
                colors={colorPickerMainColors}
                onChange={(color) => colorPickerOnChange?.(color.hex)}
              />
            </ColorPickerWrapper>
          )}
        </AnimatePresence>
        <CredentialsForm
          sendContactInfo={handleSetContactInfo}
          isCreationMode={isCreationMode}
          fields={fields}
          isLoading={generateGuestLoading || sendFeedbackLoading}
          isOpen={isCredentialDrawerOpen}
          onClose={() => setCredentialDrawerState(false)}
        />
        <AnimatePresence initial={false}>
          {((!isCreationMode && isTextRespRequired) || !!respBtnId?.length) && (
            <ResizableTextArea
              isFixed={true}
              placeholder="Your comment here."
              handleClose={handleCloseResizeText}
              isFullHeight={false}
              isDisabled={!!feedback?.isComplete}
              positionProps={{ bottom: "8%" }}
              isTextRespOnly={isTextRespRequired}
              hasGoBack={type === StoryTypeEnum.COMBINED}
              handleSend={handleTextFeedback}
            />
          )}
        </AnimatePresence>
      </PreviewFlow>
    </>
  );
};

export default Demo;
