import Heading from "./components/Heading";
import { useProfileUpdateForm } from "@/hooks";
import { message } from "antd";
import { TextFormField, SelectWithAddFormField } from "@/shared";
import { UpdateForm, FieldsSection } from "./styles";
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
        <SelectWithAddFormField
          label="I am a"
          name="profession"
          formControl={formControl}
        />
      </FieldsSection>
    </UpdateForm>
  );
};

export default UpdateProfileForm;
