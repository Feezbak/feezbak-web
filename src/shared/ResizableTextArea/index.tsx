import React, { ChangeEvent, useState, FC } from "react";
import { SendIcon } from "@/icons";
import { useDebounce } from "@/hooks";
import { SendMSGBtn, TextAreaWrapper, TextField } from "./styles";

interface Props {
  isFixed: boolean;
  isDisabled: boolean;
  handleSend: (msg: string) => void;
  defaultValue?: string;
  positionProps?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const ResizableTextArea: FC<Props> = ({
  isFixed = false,
  positionProps,
  handleSend,
  isDisabled,
  defaultValue = "",
}) => {
  const [value, setValue] = useState(defaultValue);
  const debouncedData = useDebounce(value, 200);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSendAction = () => {
    handleSend(debouncedData);
    setValue("");
  };

  return (
    <TextAreaWrapper style={positionProps} $isFixed={isFixed}>
      <TextField
        value={value}
        style={{ resize: "none" }}
        onChange={onChange}
        placeholder="Please provide your feedback here!"
        autoSize={{ minRows: 1, maxRows: 28 }}
      />
      <SendMSGBtn
        type="primary"
        icon={<SendIcon />}
        disabled={!value.length || isDisabled}
        onClick={handleSendAction}
      />
    </TextAreaWrapper>
  );
};

export default ResizableTextArea;
