import React, { useMemo, useState } from "react";
import { StoryTypeEnum } from "@/enums";
import { TypeModal, TypeSelectionBtn } from "./styles";
import { ArrowDownIcon } from "@icons/arrowDownIcon";
import TypeSelectionModalContent from "./components/TypeSelectionModalContent";

interface Props {
  onChange: (value: StoryTypeEnum) => void;
  defaultValue: StoryTypeEnum;
}

const TypeSelection = ({ onChange, defaultValue }: Props) => {
  const [isTypeModalOpen, setTypeModalState] = useState(false);

  const selectedTypeTitle = useMemo(() => {
    if (
      defaultValue === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      defaultValue === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP
    ) {
      return "Image Voting";
    } else if (defaultValue === StoryTypeEnum.COMBINED) {
      return "Combined";
    } else {
      return "Text Voting";
    }
  }, [defaultValue]);

  return (
    <>
      <TypeSelectionBtn
        type="default"
        onClick={() => setTypeModalState((ps) => !ps)}
      >
        <span>{selectedTypeTitle}</span>
        <ArrowDownIcon />
      </TypeSelectionBtn>
      <TypeModal
        open={isTypeModalOpen}
        onCancel={() => setTypeModalState(false)}
        mask={false}
        footer={null}
        closable={false}
      >
        <TypeSelectionModalContent
          defaultValue={defaultValue}
          onChange={onChange}
          setTypeModalState={setTypeModalState}
        />
      </TypeModal>
    </>
  );
};

export default TypeSelection;
