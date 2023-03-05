import React, { useContext, useMemo } from "react";
import { Select } from "antd";
import { ResponseTypeEnum } from "@/enums";
import { AnimatePresence } from "framer-motion";
import ButtonResponse from "./components/ButtonResponse";
import {
  ResponseWrapper,
  ResponseTitleAndActions,
  ResponseTypesWrapper,
} from "./styles";
import { StoryCreationContext } from "@/context";

const Response = () => {
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);

  const responseType = useMemo(
    () => storyCreationData.step2.imageVoting.response.responseType,
    [storyCreationData]
  );

  const handleChange = (value: string) => {
    setStoryCreationData((ps) => ({
      ...ps,
      step2: {
        ...ps.step2,
        imageVoting: {
          ...ps.step2.imageVoting,
          response: {
            ...ps.step2.imageVoting.response,
            responseType: value as ResponseTypeEnum,
          },
        },
      },
    }));
  };

  return (
    <ResponseWrapper>
      <ResponseTitleAndActions>
        <p>Please add min 1 and max 3 preferred responses</p>
        <Select
          defaultValue={ResponseTypeEnum.BUTTON_RESPONSE}
          onChange={handleChange}
          style={{ width: "11rem" }}
          options={[
            {
              value: ResponseTypeEnum.BUTTON_RESPONSE,
              label: "Button Response",
            },
            { value: ResponseTypeEnum.TEXT_RESPONSE, label: "Text Response" },
            { value: ResponseTypeEnum.COMBINED, label: "Combined" },
          ]}
        />
      </ResponseTitleAndActions>
      <ResponseTypesWrapper>
        <AnimatePresence initial={false}>
          {(responseType === ResponseTypeEnum.BUTTON_RESPONSE ||
            responseType === ResponseTypeEnum.COMBINED) && <ButtonResponse />}
        </AnimatePresence>
      </ResponseTypesWrapper>
    </ResponseWrapper>
  );
};

export default Response;
