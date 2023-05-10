import React, { useContext } from "react";
import { Segmented } from "antd";
import { shareChoises } from "@/constants";
import { StoryCreationContext } from "@/context";

const ShareSegmentSelection = () => {
  const { step3, setShareMethod } = useContext(StoryCreationContext);

  const handleChangeShareMethod = (value: string | number) => {
    setShareMethod(value.toString());
  };

  return (
    <Segmented
      defaultValue={step3.shareType}
      size="large"
      options={shareChoises}
      onChange={handleChangeShareMethod}
    />
  );
};

export default ShareSegmentSelection;
