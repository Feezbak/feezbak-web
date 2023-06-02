import React from "react";
import Heading from "./components/Heading";
import { useProfileUpdateForm } from "@/hooks";
import { UpdateForm } from "./styles";

const UpdateProfileForm = () => {
  const onProfileSuccessUpdate = () => {
    alert("Success Update");
  };

  const { submitForm, formState, requestLoading } = useProfileUpdateForm(
    onProfileSuccessUpdate
  );
  return (
    <UpdateForm
      name="updateForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <Heading
        loading={requestLoading}
        isDirty={formState.isDirty}
        isValid={formState.isValid}
      />
    </UpdateForm>
  );
};

export default UpdateProfileForm;
