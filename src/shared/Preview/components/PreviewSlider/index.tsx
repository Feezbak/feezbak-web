import { memo, forwardRef, useMemo } from "react";
import Slider from "react-slick";
import { getSlickSettings, Image } from "@/constants";
import { ProductLogoWhite } from "@/icons";
import PreviewSlide from "./components/PreviewSlide";
import { useResponsive } from "@/hooks";
import { SliderContainer, PoweredByFixed } from "./styles";

interface Props {
  hasCover: boolean;
  isSquare: boolean;
  hasLayer: boolean;
  setActiveSlide?: (image: Image) => void;
  images: Image[];
}

const PreviewSlider = (
  { hasCover, isSquare, hasLayer, images, setActiveSlide }: Props,
  ref: any
) => {
  const { isLessThanMd } = useResponsive();

  const isFeedbackerMobile = useMemo(
    () => !!setActiveSlide && isLessThanMd,
    [setActiveSlide, isLessThanMd]
  );

  return (
    <SliderContainer
      $isCreationMode={!setActiveSlide || isSquare}
      $isFeedbackerMobile={isFeedbackerMobile}
    >
      <PoweredByFixed>
        <p>POWERED BY</p>
        <ProductLogoWhite />
      </PoweredByFixed>
      <Slider
        {...getSlickSettings(isLessThanMd)}
        ref={ref}
        afterChange={(currentSlide) => setActiveSlide?.(images[currentSlide])}
      >
        {images?.map((image) => (
          <PreviewSlide
            hasCover={hasCover}
            imgSrc={`${process.env.REACT_APP_API_URL}/${image.src}`}
            isSquare={isSquare}
            hasLayer={hasLayer}
            key={image.id}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default memo(forwardRef(PreviewSlider));
