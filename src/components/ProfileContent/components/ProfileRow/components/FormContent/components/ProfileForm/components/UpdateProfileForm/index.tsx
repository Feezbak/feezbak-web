import React from "react";
import Heading from "./components/Heading";
import { useProfileUpdateForm } from "@/hooks";
import { UpdateForm } from "./styles";

const UpdateProfileForm = () => {
  const onProfileSuccessUpdate = () => {
    alert("Success Update");
  };

  const { submitForm } = useProfileUpdateForm(onProfileSuccessUpdate);
  return (
    <UpdateForm
      name="updateForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <Heading />
    </UpdateForm>
  );
};

export default UpdateProfileForm;
