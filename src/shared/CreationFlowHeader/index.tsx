import React from "react";
import { GoBackRoundIcon } from "@/icons";
import HeaderActions from "./components/HeaderActions";
import {
  CreationFlowHeaderWrapper,
  GoBackContentWrapper,
  BackBtn,
} from "./styles";

export interface ActionsList {
  quantitySelection: boolean;
  typeSelection: boolean;
}

interface Props {
  actions?: ActionsList;
}

const CreationFlowHeader = ({ actions }: Props) => {
  return (
    <CreationFlowHeaderWrapper>
      <GoBackContentWrapper>
        <BackBtn icon={<GoBackRoundIcon />} type="link" href="/dashboard" />
        <h3>Creating Story</h3>
      </GoBackContentWrapper>
      {!!actions && <HeaderActions actions={actions} />}
    </CreationFlowHeaderWrapper>
  );
};

export default CreationFlowHeader;
