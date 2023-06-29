import React, { useContext, memo } from "react";
import { SliderContainer } from "./styles";
import Slider from "react-slick";
import { slickSettings } from "@/constants";
import Icon from "@ant-design/icons";
import PreviewSlide from "./components/PreviewSlide";
import { FeezbakWhiteIcon } from "@/icons";
import { StoryCreationContext } from "@/context";

interface Props {
  hasCover: boolean;
  isSquare: boolean;
  hasLayer: boolean;
}

const PreviewSlider = ({ hasCover, isSquare, hasLayer }: Props) => {
  const { step2 } = useContext(StoryCreationContext);
  const { imageVoting } = step2;

  return (
    <SliderContainer>
      <Slider {...slickSettings}>
        {imageVoting?.images?.map((image) => (
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
