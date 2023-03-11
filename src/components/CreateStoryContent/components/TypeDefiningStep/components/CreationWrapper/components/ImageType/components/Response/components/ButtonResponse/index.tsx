import React, { useContext, useEffect, useState } from "react";
import RespButton from "./components/RespButton";
import { AnimatePresence } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { StoryCreationContext } from "@/context";
import uuid from "react-uuid";
import { useDebounce } from "@/hooks";
import {
  ResponseBtnList,
  AddNewRespBtn,
  ResponseListAndBtnContainer,
} from "./styles";

const ButtonResponse = () => {
  const { step2, setResponseButtons } = useContext(StoryCreationContext);
  const [respBtnState, setRespBtnState] = useState(
    step2.imageVoting.response.responseBtnList
  );
  const responses = useDebounce(respBtnState, 1000);

  useEffect(() => {
    if (responses.every((respBtn) => respBtn.text.length && respBtn.id)) {
      setResponseButtons(responses);
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [responses]);

  const handleDeleteRespBtn = (index: number) => {
    if (respBtnState.length > 1) {
      const updateArr = [...respBtnState];
      updateArr.splice(index, 1);
      setRespBtnState(updateArr);
    }
  };

  const handleAddRespBtn = () => {
    setRespBtnState((ps) => [...ps, { id: uuid(), text: "" }]);
  };

  const handleTextUpdate = (index: number, updatedText: string) => {
    const updateArr = [...respBtnState];
    updateArr[0].id = "default";
    updateArr[index].text = updatedText;
    setRespBtnState(updateArr);
  };

  return (
    <ResponseListAndBtnContainer {...opacityAnimation}>
      <ResponseBtnList>
        <AnimatePresence initial={false}>
          {respBtnState.map(({ id, text }, index) => (
            <RespButton
              deleteItem={handleDeleteRespBtn}
              key={id}
              textContent={text}
              index={index}
              sendTextUpdate={handleTextUpdate}
            />
          ))}
        </AnimatePresence>
      </ResponseBtnList>
      <AddNewRespBtn
        type="primary"
        onClick={handleAddRespBtn}
        disabled={respBtnState.length >= 3}
      >
        Add New Response Button
      </AddNewRespBtn>
    </ResponseListAndBtnContainer>
  );
};

export default ButtonResponse;
