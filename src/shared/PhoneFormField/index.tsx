import { Control } from "react-hook-form";
import { FormItem, PhoneNumberInput } from "./styles";
import { ErrorMessage } from "@/shared";
import { ContactsCollectingInputs } from "@/validations";
import "react-phone-number-input/style.css";

interface Props {
  formError?: string;
  label: string;
  name: keyof ContactsCollectingInputs;
  formControl: Control<ContactsCollectingInputs>;
  isRequired?: boolean;
  disabled?: boolean;
}

const PhoneFormField = ({
  name,
  label,
  formError,
  formControl,
  isRequired = false,
  disabled = false,
}: Props) => {
  console.log(formControl._formValues, 7777);
  return (
    <FormItem
      name={name}
      validateStatus={formError ? "error" : ""}
      help={formError && <ErrorMessage message={formError} />}
    >
      <div>
        <label htmlFor={name}>
          {label} {isRequired && <sub>*</sub>}
        </label>
        <PhoneNumberInput
          name={name}
          defaultCountry="AM"
          control={formControl}
          disabled={disabled}
          rules={{ required: false }}
        />
      </div>
    </FormItem>
  );
};

export default PhoneFormField;
