import { ContactToData } from "@shared/Preview/components/Demo/types";
import { useContactCollectionForm } from "@/hooks";
import { FormWrapper, SubmitBtn, FieldsWrapper } from "./styles";
import { PhoneFormField, TextFormField } from "@/shared";

interface Props {
  fields: string[];
  isCreation?: boolean;
  isLoading?: boolean;
  sendContactInfo: (info: ContactToData[]) => void;
}

const CredentialsFormContent = ({
  fields,
  isCreation,
  isLoading = false,
  sendContactInfo,
}: Props) => {
  const { submitForm, formState, formControl, formErrors } =
    useContactCollectionForm(sendContactInfo);

  const formContent = fields.map((field, index) => {
    switch (field) {
      case "First Name":
        return (
          <TextFormField
            disabled={isCreation}
            inputHeight="2.75"
            key={field}
            formError={formErrors["firstName"]?.message}
            label={field}
            name="firstName"
            formControl={formControl}
          />
        );
      case "Last Name":
        return (
          <TextFormField
            disabled={isCreation}
            inputHeight="2.75"
            key={field}
            formError={formErrors["lastName"]?.message}
            label={field}
            name="lastName"
            formControl={formControl}
          />
        );
      case "Email Address":
        return (
          <TextFormField
            disabled={isCreation}
            inputHeight="2.75"
            key={field}
            formError={formErrors["email"]?.message}
            label={field}
            name="email"
            formControl={formControl}
          />
        );
      case "Phone":
        return (
          <PhoneFormField
            disabled={isCreation}
            key={field}
            formError={formErrors["phone"]?.message}
            label={field}
            name="phone"
            formControl={formControl}
          />
        );
      default:
        return null;
    }
  });

  const isDisabeld = isCreation || !formState.isValid;

  return (
    <FormWrapper
      name="credentials"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <FieldsWrapper>{formContent}</FieldsWrapper>
      <SubmitBtn
        type="default"
        size="large"
        htmlType="submit"
        loading={isLoading}
        disabled={isDisabeld}
      >
        Send My Feedback
      </SubmitBtn>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
