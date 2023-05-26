import React from "react";
import {
  SectionBody,
  TypeTitle,
  TypeDescription,
  TypeInfo,
  TypeImage,
} from "./styles";

interface Props {
  isActive: boolean;
  imgSrc: string;
  typeTitle: string;
  typeDescription: string;
  handleSendSelection?: () => void;
}

const TypeSection = ({
  imgSrc,
  isActive,
  typeTitle,
  typeDescription,
  handleSendSelection,
}: Props) => {
  return (
    <SectionBody onClick={handleSendSelection} $isActive={isActive}>
      <TypeImage src={imgSrc} loading="lazy" />
      <TypeInfo>
        <TypeTitle>{typeTitle}</TypeTitle>
        <TypeDescription>{typeDescription}</TypeDescription>
      </TypeInfo>
    </SectionBody>
  );
};

export default TypeSection;
