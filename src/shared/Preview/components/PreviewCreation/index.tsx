import { useContext, useEffect, useMemo, useState } from "react";
import { StoryCreationContext } from "@/context";
import { useDebounce } from "@/hooks";
import Demo from "../Demo";
import { PreviewFlowWrapper } from "./styles";

const PreviewCreation = () => {
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
  const debouncedColorData = useDebounce(color, 1000);
  const debouncedIsSquareData = useDebounce(isSquare, 1000);

  useEffect(() => {
    if (debouncedColorData !== background) {
      setPreviewBackground(debouncedColorData);
    }
  }, [debouncedColorData, setPreviewBackground, background]);

  useEffect(() => {
    setImageSquareState(debouncedIsSquareData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedIsSquareData]);

  const responseButtons = useMemo(() => response.responseBtnList, [response]);

  return (
    <PreviewFlowWrapper xs={24} sm={24} md={24} lg={9} xl={8} xxl={7}>
      <Demo
        currentStep={currentStep}
        flowMouseLeave={(state) => setHoverState(state)}
        flowMouseEnter={(state) => setHoverState(state)}
        isHovered={isHovered}
        isCreationMode={true}
        responseButtons={responseButtons}
        title={title}
        titleColor={titleColor}
        type={type}
        coverImgSrc={imageVoting.selectedImgSrc}
        images={imageVoting.images}
        isSquare={isSquare}
        color={background}
        userInfoFields={userInfoFields}
        isInfoCollectionAllowed={isInfoCollectionAllowed}
        isColorPickerOpen={isColorPickerOpen}
        colorPickerBtnHandler={() => setColorPickerState((ps) => !ps)}
        colorPickerOnChange={(newColor) => setColor(newColor)}
        squareBtnHandler={(state) => setSquareState(state)}
      />
    </PreviewFlowWrapper>
  );
};

export default PreviewCreation;
