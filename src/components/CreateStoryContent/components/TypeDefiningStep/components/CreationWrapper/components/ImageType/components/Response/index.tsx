import React, { useContext, useMemo } from "react";
import { Select } from "antd";
import { ResponseTypeEnum } from "@/enums";
import { AnimatePresence } from "framer-motion";
import ButtonResponse from "./components/ButtonResponse";
import { StoryCreationContext } from "@/context";
import {
  ResponseWrapper,
  ResponseTitleAndActions,
  ResponseTypesWrapper,
} from "./styles";

const Response = () => {
  const { step2, setResponseType } = useContext(StoryCreationContext);

  const responseType = useMemo(
    () => step2.imageVoting.response.responseType,
    [step2]
  );

  const handleChange = (value: string) => {
    setResponseType(value);
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
