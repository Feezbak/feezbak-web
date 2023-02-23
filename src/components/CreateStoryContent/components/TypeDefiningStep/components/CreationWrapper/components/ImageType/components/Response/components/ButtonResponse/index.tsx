import React, { useState } from "react";
import RespButton from "./components/RespButton";
import { AnimatePresence } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { responseBtnListDefaultState } from "@/constants";
import {
  ResponseBtnList,
  AddNewRespBtn,
  ResponseListAndBtnContainer,
  DeleteBtnWrapper,
} from "./styles";

const ButtonResponse = () => {
  const [respBtnState, setRespBtnState] = useState(responseBtnListDefaultState);

  const handleDeleteRespBtn = (index: number) => {
    if (respBtnState.length > 1) {
      const oldArr = [...respBtnState];
      oldArr.splice(index, 1);
      setRespBtnState(oldArr);
    }
  };

  const handleAddRespBtn = () => {
    setRespBtnState((ps) => [...ps, { id: "fuck", text: "" }]);
  };

  return (
    <ResponseListAndBtnContainer>
      <ResponseBtnList>
        <AnimatePresence initial={false}>
          {respBtnState.map(({ id, text }, index) => (
            <RespButton
              deleteItem={handleDeleteRespBtn}
              key={id}
              textContent={text}
              index={index}
            />
          ))}
        </AnimatePresence>
      </ResponseBtnList>
      <AnimatePresence initial={false}>
        {respBtnState.length < 3 && (
          <DeleteBtnWrapper {...opacityAnimation}>
            <AddNewRespBtn type="primary" onClick={handleAddRespBtn}>
              Add New Response Button
            </AddNewRespBtn>
          </DeleteBtnWrapper>
        )}
      </AnimatePresence>
    </ResponseListAndBtnContainer>
  );
};

export default ButtonResponse;
