import React from "react";
import { FormWrapper, SubmitBtn, FormItem, CustomisedInput } from "./styles";

interface Props {
  fields: string[];
}

const CredentialsFormContent = ({ fields }: Props) => {
  return (
    <FormWrapper
      name="credentials"
      //      onFinish={() => submitForm()}
      autoComplete="off"
    >
      {fields.map((field, index) => (
        <FormItem name={field} key={index} rules={[{ required: true }]}>
          <>
            <label htmlFor={field}>
              {field} <sub>*</sub>
            </label>
            <CustomisedInput />
          </>
        </FormItem>
      ))}
      <SubmitBtn type="primary" htmlType="submit">
        Send My Feedback
      </SubmitBtn>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
