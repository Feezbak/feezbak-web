import React from "react";
import { Segmented } from "antd";
import { shareChoises } from "@/constants";

interface Props {
  setShareMethod: (share: string) => void;
  shareMethod: string;
}

const ShareSegmentSelection = ({ setShareMethod, shareMethod }: Props) => {
  const handleChangeShareMethod = (value: string | number) => {
    setShareMethod(value.toString());
  };

  return (
    <Segmented
      defaultValue={shareMethod}
      size="large"
      options={shareChoises}
      onChange={handleChangeShareMethod}
    />
  );
};

export default ShareSegmentSelection;
