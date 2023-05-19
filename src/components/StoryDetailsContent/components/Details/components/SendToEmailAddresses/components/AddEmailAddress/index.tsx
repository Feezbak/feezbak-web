import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";
import { useAddEmailAddressForm } from "@hooks/useAddEmailAddressForm";
import { AddingWrapper, SubmitButton, FormItem, FormSpace } from "./styles";

interface Props {
  handleAddNewEmail: (email: string) => void;
}

const AddEmailAddress = ({ handleAddNewEmail }: Props) => {
  const { formErrors, formState, formControl, submitForm, reset } =
    useAddEmailAddressForm(onSuccessAction);

  function onSuccessAction(data: { email?: string }) {
    handleAddNewEmail(data.email ?? "");
    reset();
  }

  return (
    <AddingWrapper
      name="addEmailForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <FormSpace>
        <FormItem
          name="email"
          validateStatus={formErrors && formErrors["email"] ? "error" : ""}
        >
          <Controller
            render={({ field: { onChange, value } }) => (
              <Input
                type="email"
                size="large"
                placeholder="Email Address"
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
            control={formControl}
          />
        </FormItem>
        <SubmitButton
          type="primary"
          htmlType="submit"
          disabled={!formState.isDirty || !formState.isValid}
        >
          Add Email
        </SubmitButton>
      </FormSpace>
    </AddingWrapper>
  );
};

export default AddEmailAddress;
