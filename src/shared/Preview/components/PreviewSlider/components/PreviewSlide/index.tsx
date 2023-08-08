import { ReactNode } from "react";
import { PoweredByWrapper } from "./styles";

interface Props {
  hasCover: boolean;
  hasLayer: boolean;
  isSquare: boolean;
  imgSrc: string;
  children: ReactNode;
}

const PreviewSlide = ({
  hasCover,
  hasLayer,
  isSquare,
  imgSrc,
  children,
}: Props) => {
  return (
    <PoweredByWrapper
      $hasCover={hasCover}
      $imgSrc={imgSrc}
      $isSquare={isSquare}
      $hasLayer={hasLayer}
    >
      {children}
    </PoweredByWrapper>
  );
};

export default PreviewSlide;
