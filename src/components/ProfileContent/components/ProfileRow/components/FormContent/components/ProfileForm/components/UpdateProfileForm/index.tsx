import Heading from "./components/Heading";
import { useProfileUpdateForm } from "@/hooks";
import { Controller } from "react-hook-form";
import { message } from "antd";
import { SelectWithAdd, TextFormField } from "@/shared";
import { UpdateForm, FieldsSection, FormItem } from "./styles";
import { UserDataType } from "@/constants";

interface Props {
  userRecoilData: UserDataType;
}

const UpdateProfileForm = ({ userRecoilData }: Props) => {
  const onProfileSuccessUpdate = async () => {
    await message.success("Your profile was successfuly updated!");
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
        <TextFormField
          formError={formErrors["firstName"]?.message}
          label="First Name"
          name="firstName"
          formControl={formControl}
        />
        <TextFormField
          formError={formErrors["lastName"]?.message}
          label="Last Name"
          name="lastName"
          formControl={formControl}
        />
      </FieldsSection>
      <FieldsSection size="large">
        <TextFormField
          formError={formErrors["email"]?.message}
          label="Email"
          name="email"
          type="email"
          formControl={formControl}
        />
        <FormItem name="profession">
          <div>
            <label htmlFor="profession">I am a</label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <SelectWithAdd value={value} onChange={onChange} />
              )}
              name="profession"
              control={formControl}
            />
          </div>
        </FormItem>
      </FieldsSection>
    </UpdateForm>
  );
};

export default UpdateProfileForm;
