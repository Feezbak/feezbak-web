import React, { useState, ChangeEvent } from "react";
import { listItemAnimation } from "@assets/framerAnimations";
import { ResponseButtonWrapper, DeleteRespBtn, ResponseInput } from "./styles";
import { usePresence } from "framer-motion";
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
  const [isPresent, safeToRemove] = usePresence();
  const [btnText, setBtnText] = useState(textContent);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBtnText(e.target.value.trim());
    sendTextUpdate(index, e.target.value.trim());
  };

  const animations = listItemAnimation(isPresent, () => safeToRemove?.());

  return (
    <ResponseButtonWrapper {...animations} transition={{ duration: 0.2 }}>
      <ResponseInput value={btnText} onChange={handleChange} />
      {!!index && (
        <DeleteRespBtn
          onClick={() => deleteItem(index)}
          icon={<TrashWhiteIcon />}
        />
      )}
    </ResponseButtonWrapper>
  );
};

export default RespButton;
