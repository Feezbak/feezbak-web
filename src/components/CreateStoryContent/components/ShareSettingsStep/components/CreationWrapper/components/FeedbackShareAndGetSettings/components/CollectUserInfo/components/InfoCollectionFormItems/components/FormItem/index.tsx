import React from "react";
import { DragIcon } from "@/icons";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { FormItemWrapper, Content, FieldName } from "./styles";

interface Props {
  fieldName: string;
  value: boolean;
  handleChange: (
    fieldName: "First Name" | "Last Name" | "Email Address",
    value: boolean
  ) => void;
}

const FormItem = ({ handleChange, fieldName, value }: Props) => {
  const onChange = (e: CheckboxChangeEvent) => {
    handleChange(
      fieldName as "First Name" | "Last Name" | "Email Address",
      e.target.checked
    );
  };

  return (
    <FormItemWrapper>
      <Content>
        <DragIcon />
        <FieldName>{fieldName}</FieldName>
      </Content>
      <Checkbox defaultChecked={value} onChange={onChange} />
    </FormItemWrapper>
  );
};

export default FormItem;
