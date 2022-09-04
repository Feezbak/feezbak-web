import styled from "styled-components";
import { Button, Select } from "antd";

export const SelectActionWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  .ant-select-selector {
    height: 3rem !important;
  }

  span.ant-select-selection-item {
    line-height: 3rem !important;
  }
`;
