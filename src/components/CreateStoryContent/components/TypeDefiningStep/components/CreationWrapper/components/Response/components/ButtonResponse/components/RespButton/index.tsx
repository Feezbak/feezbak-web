import { ChangeEvent, useEffect, useRef, memo } from "react";
import { InputRef } from "antd";
import { ResponseButtonWrapper, DeleteRespBtn, ResponseInput } from "./styles";
import { TrashWhiteIcon } from "@/icons";

interface Props {
  textContent: string;
  index: number;
  deleteItem: (index: number) => void;
  sendTextUpdate: (index: number, updatedText: string) => void;
}

const RespButton = ({
  textContent,
  sendTextUpdate,
  deleteItem,
  index,
}: Props) => {
  const respInputRef = useRef<InputRef>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    sendTextUpdate(index, e.target.value);
  };

  useEffect(() => {
    respInputRef?.current?.focus();
  }, []);

  return (
    <ResponseButtonWrapper>
      <ResponseInput
        ref={respInputRef}
        value={textContent}
        onChange={handleChange}
      />
      {!!index && (
        <DeleteRespBtn
          ghost={true}
          onClick={() => deleteItem(index)}
          icon={<TrashWhiteIcon />}
        />
      )}
    </ResponseButtonWrapper>
  );
};

export default memo(RespButton);
