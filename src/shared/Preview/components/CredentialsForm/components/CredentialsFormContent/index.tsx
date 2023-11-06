import { ContactToData } from "@shared/Preview/components/Demo/types";
import { useContactCollectionForm } from "@/hooks";
import { FormWrapper, SubmitBtn, FormItem } from "./styles";
import { useMemo } from "react";
import TextField from "./components/TextField";

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

  const formContent = useMemo(
    () =>
      fields.map((field, index) => {
        switch (field) {
          case "First Name":
            return (
              <TextField
                key={field}
                formError={formErrors["firstName"]?.message}
                label={field}
                name="firstName"
                formControl={formControl}
              />
            );
          case "Last Name":
            return (
              <TextField
                key={field}
                formError={formErrors["lastName"]?.message}
                label={field}
                name="lastName"
                formControl={formControl}
              />
            );
          case "Email Address":
            return (
              <TextField
                key={field}
                formError={formErrors["email"]?.message}
                label={field}
                name="email"
                formControl={formControl}
              />
            );
          case "Phone":
            return (
              <TextField
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
      }),
    [fields, formControl, formErrors]
  );

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
          disabled={isCreation || !formState.isDirty || !formState.isValid}
        >
          Send My Feeeeedback
        </SubmitBtn>
      </FormItem>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
