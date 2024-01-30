import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { GoBackRoundIcon } from "@/icons";
import { useDebounce } from "@/hooks";
import {
  CommentMainDrawer,
  ContentWrapper,
  Description,
  SendMSGBtn,
  TextField,
  CloseBtn,
  Title,
} from "./styles";

interface Props {
  isOpen: boolean;
  isDisabled: boolean;
  handleSend: (msg: string) => void;
  handleClose: () => void;
  defaultValue?: string;
  isMobile: boolean;
}

const CommentDrawer: FC<Props> = ({
  isOpen,
  handleSend,
  isDisabled,
  defaultValue = "",
  handleClose,
  isMobile = false,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
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
    <CommentMainDrawer
      title=""
      footer={false}
      placement="bottom"
      height={`100${isMobile ? "dvh" : "%"}`}
      getContainer={false}
      closable={false}
      mask={false}
      open={isOpen}
    >
      <ContentWrapper>
        <CloseBtn onClick={handleClose} icon={<GoBackRoundIcon />} />
        <Title>Kindly provide your feedback.</Title>
        <Description>We are very eager to hear your thoughts.</Description>
        <TextField
          ref={textAreaRef}
          value={value}
          onChange={onChange}
          placeholder="Type in your feedback here..."
          autoSize={{ minRows: 2, maxRows: 17 }}
        />
      </ContentWrapper>
      <SendMSGBtn
        type="primary"
        size="large"
        disabled={!value.length || isDisabled}
        onClick={handleSendAction}
      >
        Add Your Feedback
      </SendMSGBtn>
    </CommentMainDrawer>
  );
};

export default CommentDrawer;
