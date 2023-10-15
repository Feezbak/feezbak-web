import { PoweredByWrapper } from "./styles";

interface Props {
  hasCover: boolean;
  hasLayer: boolean;
  isSquare: boolean;
  imgSrc: string;
}

const PreviewSlide = ({ hasCover, hasLayer, isSquare, imgSrc }: Props) => {
  return (
    <PoweredByWrapper
      $hasCover={hasCover}
      $imgSrc={imgSrc}
      $isSquare={isSquare}
      $hasLayer={hasLayer}
    />
  );
};

export default PreviewSlide;
