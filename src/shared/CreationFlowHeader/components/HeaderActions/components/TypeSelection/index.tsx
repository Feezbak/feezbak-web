import React from "react";
import { StoryTypeEnum } from "@/enums";
import { Select } from "antd";

interface Props {
  onChange: (value: StoryTypeEnum) => void;
  defaultValue: StoryTypeEnum;
}

const TypeSelection = ({ onChange, defaultValue }: Props) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      style={{ width: "10rem" }}
      options={[
        { value: StoryTypeEnum.IMAGE_VOTING, label: "Image Voting" },
        { value: StoryTypeEnum.TEXT_VOTING, label: "Text Voting" },
      ]}
    />
  );
};

export default TypeSelection;
