import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ColorPickerIcon, MakeSquareIcon } from "@/icons";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "@/shared/ResponsePreviewBtn";
import CreatedBy from "@shared/CreatedBy";
import PreviewSlider from "@shared/Preview/components/PreviewSlider";
import CredentialsForm from "@shared/Preview/components/CredentialsForm";
import CommentDrawer from "@shared/Preview/components/CommentDrawer";
import DOMPurify from "dompurify";
import useRequest from "@ahooksjs/use-request";
import Slider from "react-slick";
import { useQuery, useOutsideClick, useResponsive } from "@/hooks";
import { generateFeedback, sendFeedback } from "@/api";
import { useParams } from "react-router-dom";
import { DemoProps, Feedback, ContactToData } from "./types";
import { handleResponse } from "./utils";
import { message } from "antd";
import { colorPickerMainColors, Image, defaultContactForm } from "@/constants";
import { dynamicTextColor } from "@helpers/dynamicTextColor";
import {
  StoryStepEnum,
  StoryTypeEnum,
  StyleEnums,
  ClientLayerEnums,
} from "@/enums";
import {
  opacityAnimation,
  opacityWithScaleAnimation,
} from "@assets/framerAnimations";
import {
  ResponseTitleWrapper,
  ColorPickerWrapper,
  CircleColorPicker,
  ColorPickerBtn,
  TitlePreview,
  PreviewFlow,
  SeeFullBtn,
  Responses,
  SquareBtn,
} from "./styles";
import { ResponseBtnsType } from "@/constants";

// ---------- sub-components ----------

interface ColorPickerPanelProps {
  color: string;
  isHovered: boolean;
  isColorPickerOpen: boolean;
  isSquare: boolean;
  isSquareBtnVisible: boolean;
  hasCoverImg: boolean;
  colorPickerRef: React.RefObject<HTMLDivElement>;
  colorPickerBtnHandler?: () => void;
  colorPickerOnChange?: (color: string) => void;
  squareBtnHandler?: (state: boolean) => void;
}

const ColorPickerPanel = memo(
  ({
    color,
    isHovered,
    isColorPickerOpen,
    isSquare,
    isSquareBtnVisible,
    hasCoverImg,
    colorPickerRef,
    colorPickerBtnHandler,
    colorPickerOnChange,
    squareBtnHandler,
  }: ColorPickerPanelProps) => (
    <>
      <AnimatePresence>
        {((isHovered && hasCoverImg && squareBtnHandler) || isSquare) &&
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
      <AnimatePresence>
        {isColorPickerOpen && (
          <ColorPickerWrapper
            {...opacityWithScaleAnimation}
            ref={colorPickerRef}
          >
            <CircleColorPicker
              color={color}
              colors={colorPickerMainColors}
              onChange={(c) => colorPickerOnChange?.(c.hex)}
            />
          </ColorPickerWrapper>
        )}
      </AnimatePresence>
    </>
  )
);

interface ResponseButtonsProps {
  responseButtons: ResponseBtnsType;
  isLoading: boolean;
  checkActivity: (id: string) => boolean;
  onButtonClick: (btn: any) => void;
}

const ResponseButtons = memo(
  ({
    responseButtons,
    isLoading,
    checkActivity,
    onButtonClick,
  }: ResponseButtonsProps) => (
    <Responses
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <AnimatePresence initial={false}>
        {responseButtons.map((respBtn) => (
          <ResponsePreviewBtn
            disabled={isLoading}
            isActive={checkActivity(respBtn.id)}
            key={respBtn.id}
            text={respBtn.text}
            action={() => onButtonClick(respBtn)}
          />
        ))}
      </AnimatePresence>
    </Responses>
  )
);

// ---------- main component ----------

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
  const { isMobile } = useResponsive();
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
  const [isCommentDrawerOpen, setCommentDrawerState] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [respBtnId, setRespBtnId] = useState("");
  const [isFullContentVisible, setFullContentVisibilityState] = useState(
    !isSquare
  );

  // Derived values — cheap enough to compute inline
  const hasButtonsResp = useMemo(
    () =>
      type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      type === StoryTypeEnum.COMBINED,
    [type]
  );
  const isTextType =
    type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
    type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP;
  const isTextRespRequired =
    type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP ||
    type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP;
  const isNotFirstStep = currentStep !== StoryStepEnum.TITLE_STEP;
  const hasOutline = color.toUpperCase() === StyleEnums.white;
  const hasLayer = !!coverImgSrc?.length && isNotFirstStep && !isSquare;
  const isSquareBtnVisible = isCreationMode && hasButtonsResp;
  const isSquareContent = isCreationMode ? isSquare : !isFullContentVisible;

  const createMarkup = useMemo(
    () => ({
      __html:
        !title.length || title === "<p></p>"
          ? '<p class="story-title-placeholder">Do you like my jacket?</p>'
          : DOMPurify.sanitize(title),
    }),
    [title]
  );

  const fields = useMemo(
    () => userInfoFields.map((f) => f.label),
    [userInfoFields]
  );

  const seeFullBtnBckg: StyleEnums | string = isFullContentVisible
    ? "rgba(255, 255, 255, 0.2)"
    : dynamicTextColor(color).color;

  const structureFeedbackPayload = async (feedbackObj: Feedback) => {
    const feedbackData = structuredClone(feedbackObj);
    const guestData = feedbackData.contactToData;
    delete feedbackData.contactToData;
    const guestPayloadData = defaultContactForm;
    guestData?.forEach((item: { field: string; value: string }) => {
      if (item.field === "firstName") {
        guestPayloadData.firstName = item.value;
      } else if (item.field === "lastName") {
        guestPayloadData.lastName = item.value;
      } else if (item.field === "phone") {
        guestPayloadData.phone = +item.value;
      } else {
        guestPayloadData.email = item.value;
      }
    });
    return {
      feedback: feedbackData,
      guest: guestData ? guestPayloadData : {},
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
        const feedbackPayload = await structureFeedbackPayload(feedback!);
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

  const sendFeedbackRequests = async () => {
    const isGuest = !guestId && !feedbackId;
    if (isGuest) {
      await generateGuest();
    } else {
      const feedbackPayload = await structureFeedbackPayload(feedback!);
      await sendFeedbackResults(feedbackPayload, guestId, feedbackId);
    }
  };

  useEffect(() => {
    if (feedback?.isComplete) {
      if (isInfoCollectionAllowed) {
        setCredentialDrawerState(true);
      } else {
        sendFeedbackRequests();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedback, query]);

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
    setCommentDrawerState(false);
  };

  const handleButtonFeedback = useCallback(
    (actionData: any) => {
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
    },
    [isCreationMode, type, feedback, isMultiple, storyId, images, activeSlide]
  );

  const handleCloseCommentDrawer = () => {
    setRespBtnId("");
    setCommentDrawerState(false);
  };

  const handleSetContactInfo = (contactToData: ContactToData[]) => {
    const newFeedback = { ...structuredClone(feedback), contactToData };
    setFeedback(newFeedback);
    sendFeedbackRequests();
  };

  const checkActivity = useCallback(
    (id: string) => {
      if (feedback?.responses && hasButtonsResp) {
        const activeSlideRespData = feedback.responses.find(
          (slide) => slide.imageId === activeSlide?.id
        );
        return activeSlideRespData?.respBtnId === id;
      }
      return false;
    },
    [feedback, hasButtonsResp, activeSlide]
  );

  const isResponseBtnLoading = generateGuestLoading || sendFeedbackLoading;
  const textColor = dynamicTextColor(color);

  return (
    <>
      <PreviewFlow
        $hasBorder={!isCreationMode}
        $background={color}
        $hasOutline={hasOutline}
        $hasBorderRadius={!isCreationMode}
        onMouseLeave={() => flowMouseLeave?.(false)}
        onMouseEnter={() => flowMouseEnter?.(true)}
        {...opacityWithScaleAnimation}
      >
        <ColorPickerPanel
          color={color}
          isHovered={isHovered}
          isColorPickerOpen={isColorPickerOpen}
          isSquare={isSquare}
          isSquareBtnVisible={isSquareBtnVisible}
          hasCoverImg={!!coverImgSrc?.length}
          colorPickerRef={colorPickerRef}
          colorPickerBtnHandler={colorPickerBtnHandler}
          colorPickerOnChange={colorPickerOnChange}
          squareBtnHandler={squareBtnHandler}
        />
        {!!images.length && (
          <PreviewSlider
            setActiveSlide={!isCreationMode ? setActiveSlide : undefined}
            ref={sliderRef}
            images={images}
            hasCover={!!coverImgSrc?.length}
            hasLayer={hasLayer || !isCreationMode}
            isSquare={isSquareContent}
          />
        )}
        {!isTextType && !isCreationMode && (
          <SeeFullBtn
            $bgColor={seeFullBtnBckg}
            $color={
              isFullContentVisible
                ? StyleEnums.white
                : dynamicTextColor(seeFullBtnBckg as string).color
            }
            ghost={!isFullContentVisible}
            onClick={() => setFullContentVisibilityState((ps) => !ps)}
          >
            {isFullContentVisible ? "See Questions" : "See Full Image"}
          </SeeFullBtn>
        )}
        <ResponseTitleWrapper>
          <TitlePreview
            dangerouslySetInnerHTML={createMarkup}
            $hasBtnResp={hasButtonsResp}
            $color={textColor.color}
          />
          {isTextRespRequired && !isCreationMode && (
            <ResponsePreviewBtn
              text="Leave Your Feedback"
              margin="1rem 0 0 0"
              action={() => setCommentDrawerState(true)}
            />
          )}
          {isFullContentVisible &&
            (isNotFirstStep || !isCreationMode) &&
            hasButtonsResp && (
              <ResponseButtons
                responseButtons={responseButtons}
                isLoading={isResponseBtnLoading}
                checkActivity={checkActivity}
                onButtonClick={handleButtonFeedback}
              />
            )}
        </ResponseTitleWrapper>
        <CreatedBy
          isDark={textColor.isDark}
          color={textColor.color}
          margins={`2.75rem 0 ${isCreationMode ? 2.25 : 1.25}rem 0`}
        />
      </PreviewFlow>
      <CommentDrawer
        isMobile={isMobile}
        isOpen={isCommentDrawerOpen || !!respBtnId.length}
        handleClose={handleCloseCommentDrawer}
        isDisabled={!!feedback?.isComplete && !isInfoCollectionAllowed}
        handleSend={handleTextFeedback}
      />
      <CredentialsForm
        sendContactInfo={handleSetContactInfo}
        isCreationMode={isCreationMode}
        fields={fields}
        isMobile={isMobile}
        isLoading={isResponseBtnLoading}
        isOpen={isCredentialDrawerOpen}
        onClose={() => setCredentialDrawerState(false)}
      />
    </>
  );
};

export default Demo;
