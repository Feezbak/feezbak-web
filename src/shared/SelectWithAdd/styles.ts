import styled from "styled-components";
import { Button, Select } from "antd";
import { FlexBoxEnum } from "@/enums";

export const SelectActionWrapper = styled.div`
  padding: 0.5rem;
  ${FlexBoxEnum.CenterVertical}

  &.ant-space-item {
    padding: 0.5rem;
    width: 100%;
  }
`;

export const ItemAddButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  height: 3rem;
  border-radius: 1.5rem;
`;

export const CustomSelect = styled(Select)`
  height: 3rem;
  max-width: 23.25rem;
  .ant-select-selector {
    height: 3rem !important;
  }

  span.ant-select-selection-item {
    line-height: 3rem !important;
  }
`;
