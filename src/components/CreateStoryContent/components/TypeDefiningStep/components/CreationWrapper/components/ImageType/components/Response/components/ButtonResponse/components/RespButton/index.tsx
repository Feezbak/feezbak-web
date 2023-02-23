import React, { useState, ChangeEvent } from "react";
import { listItemAnimation } from "@assets/framerAnimations";
import { ResponseButtonWrapper, DeleteRespBtn, ResponseInput } from "./styles";
import { usePresence } from "framer-motion";

interface Props {
  textContent: string;
  index: number;
  deleteItem: (index: number) => void;
}

const RespButton = ({ textContent, deleteItem, index }: Props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [btnText, setBtnText] = useState(textContent);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBtnText(e.target.value);
  };

  const animations = listItemAnimation(isPresent, () => safeToRemove?.());

  return (
    <ResponseButtonWrapper {...animations}>
      <ResponseInput value={btnText} onChange={handleChange} />
      {!!index && (
        <DeleteRespBtn onClick={() => deleteItem(index)}>Delete</DeleteRespBtn>
      )}
    </ResponseButtonWrapper>
  );
};

export default RespButton;
