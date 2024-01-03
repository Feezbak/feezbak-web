import { PreviewSlideWrapper } from "./styles";

interface Props {
  hasCover: boolean;
  hasLayer: boolean;
  isSquare: boolean;
  imgSrc: string;
}

const PreviewSlide = ({ hasCover, hasLayer, isSquare, imgSrc }: Props) => {
  return (
    <PreviewSlideWrapper
      $hasCover={hasCover}
      $imgSrc={imgSrc}
      $isSquare={isSquare}
      $hasLayer={hasLayer}
    />
  );
};

export default PreviewSlide;
