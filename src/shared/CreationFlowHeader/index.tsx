import React from "react";
import { GoBackRoundIcon, MobileDeviseIcon } from "@/icons";
import HeaderActions from "./components/HeaderActions";
import { StoryTypeEnum } from "@/enums";
import { useResponsive } from "@/hooks";
import {
  CreationFlowHeaderWrapper,
  GoBackContentWrapper,
  DemoBtn,
  BackBtn,
} from "./styles";

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
  handleDemo?: () => void;
}

const CreationFlowHeader = ({
  actions,
  handleDemo,
  handleQuantitySelection,
  handleTypeSelection,
  typeSelectionDefaultValue,
  quantitySelectionDefaultValue,
}: Props) => {
  const { isMobile } = useResponsive();
  return (
    <CreationFlowHeaderWrapper>
      <GoBackContentWrapper>
        <BackBtn icon={<GoBackRoundIcon />} type="link" href="/dashboard" />
        <h3>Creating Story</h3>

        {isMobile && (
          <DemoBtn
            type="primary"
            onClick={handleDemo}
            icon={<MobileDeviseIcon />}
          />
        )}
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
