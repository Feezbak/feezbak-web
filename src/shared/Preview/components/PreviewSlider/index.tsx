import React, { memo } from "react";
import { SliderContainer } from "./styles";
import Slider from "react-slick";
import { slickSettings, Image } from "@/constants";
import Icon from "@ant-design/icons";
import PreviewSlide from "./components/PreviewSlide";
import { FeezbakWhiteIcon } from "@/icons";

interface Props {
  hasCover: boolean;
  isSquare: boolean;
  hasLayer: boolean;
  images: Image[];
}

const PreviewSlider = ({ hasCover, isSquare, hasLayer, images }: Props) => {
  return (
    <SliderContainer>
      <Slider {...slickSettings}>
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
              <Icon component={FeezbakWhiteIcon} />
            </>
          </PreviewSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default memo(PreviewSlider);
