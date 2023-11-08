import { ContactToData } from "@shared/Preview/components/Demo/types";
import { useContactCollectionForm } from "@/hooks";
import { FormWrapper, SubmitBtn, FormItem } from "./styles";
import { PhoneFormField, TextFormField } from "@/shared";
import { isPossiblePhoneNumber } from "react-phone-number-input";

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
  const { submitForm, watch, formState, formControl, formErrors } =
    useContactCollectionForm(sendContactInfo);
  const phoneValue = watch("phone");
  const isValidPhoneNumber =
    phoneValue && isPossiblePhoneNumber(String(phoneValue));

  const formContent = fields.map((field, index) => {
    switch (field) {
      case "First Name":
        return (
          <TextFormField
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

  const isDisabeld = !isValidPhoneNumber || isCreation || !formState.isValid;

  return (
    <FormWrapper
      name="credentials"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      {formContent}
      <FormItem>
        <SubmitBtn
          type="default"
          size="large"
          htmlType="submit"
          loading={isLoading}
          disabled={isDisabeld}
        >
          Send My Feeeeedback
        </SubmitBtn>
      </FormItem>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
