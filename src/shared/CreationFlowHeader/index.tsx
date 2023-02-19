import React from "react";
import { GoBackRoundIcon } from "@/icons";
import HeaderActions from "./components/HeaderActions";
import {
  CreationFlowHeaderWrapper,
  GoBackContentWrapper,
  BackBtn,
} from "./styles";
import { StoryTypeEnum } from "@/enums";

export interface ActionsList {
  quantitySelection: boolean;
  typeSelection: boolean;
}

interface Props {
  actions?: ActionsList;
  handleQuantitySelection?: (value: boolean) => void;
  quantitySelectionDefaultValue?: boolean;
  handleTypeSelection?: (value: StoryTypeEnum) => void;
  typeSelectionDefaultValue?: StoryTypeEnum;
}

const CreationFlowHeader = ({
  actions,
  handleQuantitySelection,
  handleTypeSelection,
  typeSelectionDefaultValue,
  quantitySelectionDefaultValue,
}: Props) => {
  return (
    <CreationFlowHeaderWrapper>
      <GoBackContentWrapper>
        <BackBtn icon={<GoBackRoundIcon />} type="link" href="/dashboard" />
        <h3>Creating Story</h3>
      </GoBackContentWrapper>
      {!!actions && (
        <HeaderActions
          actions={actions}
          handleQuantitySelection={handleQuantitySelection}
          handleTypeSelection={handleTypeSelection}
          typeSelectionDefaultValue={typeSelectionDefaultValue}
          quantitySelectionDefaultValue={quantitySelectionDefaultValue}
        />
      )}
    </CreationFlowHeaderWrapper>
  );
};

export default CreationFlowHeader;
