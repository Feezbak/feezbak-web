import React, { ChangeEvent, useState, useEffect, useRef, FC } from "react";
import { SendIcon, ResizeIcon } from "@/icons";
import { useDebounce } from "@/hooks";
import {
  SendMSGBtn,
  TextAreaWrapper,
  TextField,
  ResizeBtn,
  ActionsWrapper,
  Title,
  Header,
} from "./styles";
import { opacityWithScaleAnimation } from "@assets/framerAnimations";

interface Props {
  isFixed: boolean;
  isDisabled: boolean;
  handleSend: (msg: string) => void;
  defaultValue?: string;
  hasSend?: boolean;
  hasResize?: boolean;
  isFullHeight?: boolean;
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
  hasSend = true,
  hasResize = true,
  isFullHeight = false,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFullSize, setSizeState] = useState(isFullHeight);
  const [value, setValue] = useState(defaultValue);
  const debouncedData = useDebounce(value, 200);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSendAction = () => {
    handleSend(debouncedData);
    setValue("");
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <TextAreaWrapper
      style={positionProps}
      $isFixed={isFixed}
      {...opacityWithScaleAnimation}
    >
      <Header>
        <Title>Please provide your feedback below!</Title>
        <ActionsWrapper>
          {hasResize && (
            <ResizeBtn
              icon={<ResizeIcon />}
              disabled={!value.length || isDisabled}
              onClick={() => setSizeState((ps) => !ps)}
            />
          )}
          {hasSend && (
            <SendMSGBtn
              type="primary"
              icon={<SendIcon />}
              disabled={!value.length || isDisabled}
              onClick={handleSendAction}
            />
          )}
        </ActionsWrapper>
      </Header>
      <TextField
        ref={textAreaRef}
        $isFullSize={isFullSize}
        value={value}
        style={{ resize: "none" }}
        onChange={onChange}
        autoSize={{ minRows: 2, maxRows: 28 }}
      />
    </TextAreaWrapper>
  );
};

export default ResizableTextArea;
