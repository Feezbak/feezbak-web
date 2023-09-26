import Heading from "./components/Heading";
import { useProfileUpdateForm } from "@/hooks";
import { Controller } from "react-hook-form";
import { message } from "antd";
import { ErrorMessage, SelectWithAdd } from "@/shared";
import { UpdateForm, FieldsSection, FormItem, CustomisedInput } from "./styles";
import { UserDataType } from "@/constants";

interface Props {
  userRecoilData: UserDataType;
}

const UpdateProfileForm = ({ userRecoilData }: Props) => {
  const onProfileSuccessUpdate = () => {
    message.success("Your profile was successfuly updated!");
  };

  const { submitForm, formState, requestLoading, formControl, formErrors } =
    useProfileUpdateForm(onProfileSuccessUpdate, userRecoilData);

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
      <FieldsSection size="large">
        <FormItem
          name="firstName"
          validateStatus={formErrors?.["firstName"] ? "error" : ""}
          help={
            formErrors.firstName && (
              <ErrorMessage message={formErrors.firstName.message} />
            )
          }
        >
          <>
            <label htmlFor="firstName">
              Firstname <sub>*</sub>
            </label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <CustomisedInput
                  size="large"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="firstName"
              control={formControl}
            />
          </>
        </FormItem>
        <FormItem
          name="lastname"
          validateStatus={formErrors?.["lastName"] ? "error" : ""}
          help={
            formErrors.lastName && (
              <ErrorMessage message={formErrors.lastName.message} />
            )
          }
        >
          <>
            <label htmlFor="lastName">
              Lastname <sub>*</sub>
            </label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <CustomisedInput
                  size="large"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="lastName"
              control={formControl}
            />
          </>
        </FormItem>
      </FieldsSection>
      <FieldsSection size="large">
        <FormItem
          name="email"
          validateStatus={formErrors?.["email"] ? "error" : ""}
          help={
            formErrors.email && (
              <ErrorMessage message={formErrors.email.message} />
            )
          }
        >
          <>
            <label htmlFor="email">
              Email <sub>*</sub>
            </label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <CustomisedInput
                  type="email"
                  size="large"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="email"
              control={formControl}
            />
          </>
        </FormItem>
        <FormItem name="profession">
          <>
            <label htmlFor="profession">I am a</label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <SelectWithAdd value={value} onChange={onChange} />
              )}
              name="profession"
              control={formControl}
            />
          </>
        </FormItem>
      </FieldsSection>
    </UpdateForm>
  );
};

export default UpdateProfileForm;
