import { memo, forwardRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { slickSettings, Image } from "@/constants";
import logoFeezbak from "@images/product_logo.svg";
import PreviewSlide from "./components/PreviewSlide";
import { SliderContainer, ProductLogo } from "./styles";

interface Props {
  hasCover: boolean;
  isSquare: boolean;
  hasLayer: boolean;
  setActiveSlide?: (slideId: string) => void;
  images: Image[];
}

const PreviewSlider = (
  { hasCover, isSquare, hasLayer, images, setActiveSlide }: Props,
  ref: any
) => {
  const [activeId, setActiveId] = useState(images[0].id);

  useEffect(() => {
    setActiveSlide && setActiveSlide(activeId);
  }, [activeId, setActiveSlide]);

  return (
    <SliderContainer $isCreationMode={!setActiveSlide || isSquare}>
      <Slider
        {...slickSettings}
        ref={ref}
        afterChange={(currentSlide) => setActiveId(images[currentSlide].id)}
      >
        {images?.map((image) => (
          <PreviewSlide
            hasCover={hasCover}
            imgSrc={`${process.env.REACT_APP_API_URL}/${image.src}`}
            isSquare={isSquare}
            hasLayer={hasLayer}
            key={image.id}
          >
            <>
              <p>POWERED BY</p>
              <ProductLogo
                src={logoFeezbak}
                alt="feezbak logo"
                loading="lazy"
              />
            </>
          </PreviewSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default memo(forwardRef(PreviewSlider));
