import React from "react";
import { FormWrapper, SubmitBtn, FormItem, CustomisedInput } from "./styles";

interface Props {
  fields: string[];
  isCreation?: boolean;
}

const CredentialsFormContent = ({ fields, isCreation = true }: Props) => {
  const handleSubmit = (formData: any) => {
    console.log(formData, 4444);
  };

  return (
    <FormWrapper
      name="credentials"
      onFinish={isCreation ? undefined : handleSubmit}
      autoComplete="off"
    >
      {fields.map((field, index) => (
        <FormItem name={field} key={index} rules={[{ required: true }]}>
          <div>
            <label htmlFor={field}>
              {field} <sub>*</sub>
            </label>
            <CustomisedInput disabled={isCreation} />
          </div>
        </FormItem>
      ))}
      <FormItem>
        <SubmitBtn type="primary" htmlType="submit">
          Send My Feedback
        </SubmitBtn>
      </FormItem>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
