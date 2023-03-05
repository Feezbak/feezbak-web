import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Icon from "@ant-design/icons";
import {
  AnanasOnBikeIcon,
  ColorPickerIcon,
  FeezbakWhiteIcon,
  MakeSquareIcon,
} from "@/icons";
import { StoryCreationContext } from "@/context";
import { colorPickerMainColors } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import ResponsePreviewBtn from "../ResponsePreviewBtn";
import { useDebounce } from "@/hooks";
import DOMPurify from "dompurify";
import { ResponseTypeEnum, StoryTypeEnum, StyleEnums } from "@/enums";
import { opacityAnimation } from "@assets/framerAnimations";
import { notification } from "antd";
import { PreviewFlowWrapper } from "@components/CreateStoryContent/styles";
import {
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
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);
  const [color, setColor] = useState(storyCreationData.step1.background);
  const [isSquare, setSquareState] = useState(
    storyCreationData.step2.imageVoting.isSquare
  );
  const debouncedData = useDebounce(color, 1000);
  const [api, contextHolder] = notification.useNotification();

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

      openNotification();
    }
  }, [
    debouncedData,
    setStoryCreationData,
    storyCreationData,
    openNotification,
  ]);

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
      >
        <AnimatePresence>
          {coverImgSrc && (
            <motion.div {...opacityAnimation}>
              <SquareBtn
                icon={<MakeSquareIcon />}
                $isActive={isSquare}
                onClick={() => setSquareState((ps) => !ps)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          <PoweredByWrapper
            $hasCover={!!coverImgSrc.length}
            $imgSrc={coverImgSrc}
            $isSquare={isSquare}
            {...opacityAnimation}
          >
            <p>POWERED BY</p>
            <Icon component={FeezbakWhiteIcon} />
          </PoweredByWrapper>
        </AnimatePresence>
        <ColorPickerBtn
          icon={<ColorPickerIcon />}
          onClick={() => setColorPickerState((ps) => !ps)}
        />
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
      {contextHolder}
    </PreviewFlowWrapper>
  );
};

export default Preview;
