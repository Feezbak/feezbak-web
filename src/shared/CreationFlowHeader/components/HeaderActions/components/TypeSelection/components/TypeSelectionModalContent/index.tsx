import React, { useState, useEffect } from "react";
import { StoryTypeEnum } from "@/enums";
import TypeSection from "./components/TypeSection";
import { typesModalContent } from "./utils";
import {
  SectionTitle,
  TypeSelectionModalWrapper,
  SectionWrapper,
} from "./styles";

interface Props {
  onChange: (value: StoryTypeEnum) => void;
  defaultValue: StoryTypeEnum;
  setTypeModalState: (state: boolean) => void;
}

const TypeSelectionModalContent = ({
  onChange,
  defaultValue,
  setTypeModalState,
}: Props) => {
  const [selected, setSelectedState] = useState<StoryTypeEnum>(defaultValue);

  useEffect(() => {
    return () => {
      // This cleanup function will be called when the component unmounts
      clearAllTimeouts();
    };
  }, []);

  function clearAllTimeouts() {
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

  const handleSelection = (type: StoryTypeEnum) => {
    setSelectedState(type);
    setTimeout(() => {
      onChange(type);
      setTypeModalState(false);
    }, 500);
  };

  return (
    <TypeSelectionModalWrapper>
      {typesModalContent.map((section) => (
        <>
          <SectionTitle>{section.sectionTitle}</SectionTitle>
          <SectionWrapper>
            {section?.type1 && (
              <TypeSection
                isActive={selected === section.type1.type}
                handleSendSelection={() => handleSelection(section.type1.type)}
                imgSrc={section?.type1.imgSrc}
                typeTitle={section?.type1.title}
                typeDescription={section?.type1.desc}
              />
            )}
            {section?.type2 && (
              <TypeSection
                isActive={selected === section.type2.type}
                handleSendSelection={() => handleSelection(section.type2.type)}
                imgSrc={section?.type2.imgSrc}
                typeTitle={section?.type2.title}
                typeDescription={section?.type2.desc}
              />
            )}
          </SectionWrapper>
        </>
      ))}
    </TypeSelectionModalWrapper>
  );
};

export default TypeSelectionModalContent;
