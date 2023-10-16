import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from "react";
import { ResizeIcon, GoBackRoundIcon } from "@/icons";
import { useDebounce } from "@/hooks";
import { opacityWithScaleAnimation } from "@assets/framerAnimations";
import {
  ActionsWrapper,
  Header,
  ResizeBtn,
  SendMSGBtn,
  TextAreaWrapper,
  TextField,
  Title,
  CloseBtn,
} from "./styles";

interface Props {
  isFixed: boolean;
  isDisabled: boolean;
  handleSend: (msg: string) => void;
  handleClose: () => void;
  defaultValue?: string;
  hasSend?: boolean;
  hasResize?: boolean;
  hasGoBack?: boolean;
  isFullHeight?: boolean | null;
  isTextRespOnly?: boolean;
  placeholder?: string;
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
  handleClose,
  hasSend = true,
  hasGoBack = false,
  hasResize = true,
  isFullHeight = false,
  isTextRespOnly = false,
  placeholder,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFullSize, setSizeState] = useState<null | boolean>(
    isFullHeight || null
  );
  const [value, setValue] = useState(defaultValue);
  const debouncedData = useDebounce(value, 200);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!e.target.value.length) setSizeState(null);
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

  const height = useMemo(() => {
    return isTextRespOnly && isFullSize === null
      ? "unset"
      : !isFullSize
      ? "6rem !important"
      : "32rem !important";
  }, [isFullSize, isTextRespOnly]);

  const handleResize = () => {
    if (isFullSize === null) {
      setSizeState(true);
    } else {
      setSizeState(!isFullSize);
    }
  };

  return (
    <TextAreaWrapper
      style={positionProps}
      $isFixed={isFixed}
      {...opacityWithScaleAnimation}
    >
      <Header>
        <Title>Add feedback to your choice.</Title>
        <ActionsWrapper>
          {hasGoBack && (
            <CloseBtn onClick={handleClose} icon={<GoBackRoundIcon />} />
          )}
          {hasResize && (
            <ResizeBtn icon={<ResizeIcon />} onClick={handleResize} />
          )}
        </ActionsWrapper>
      </Header>
      <TextField
        ref={textAreaRef}
        $height={height}
        value={value}
        style={{ resize: "none" }}
        onChange={onChange}
        placeholder={placeholder}
        autoSize={{ minRows: 2, maxRows: 17 }}
      />
      {hasSend && (
        <SendMSGBtn
          type="primary"
          disabled={!value.length || isDisabled}
          onClick={handleSendAction}
        >
          Add Your Feedback
        </SendMSGBtn>
      )}
    </TextAreaWrapper>
  );
};

export default ResizableTextArea;
