import { Controller, Control } from "react-hook-form";
import { FormItem, PhoneNumberInput } from "./styles";
import { ErrorMessage } from "@/shared";
import { ContactsCollectingInputs } from "@/validations";
import "react-phone-number-input/style.css";

interface Props {
  formError?: string;
  label: string;
  name: keyof ContactsCollectingInputs;
  formControl: Control<ContactsCollectingInputs>;
}

const PhoneFormField = ({ name, label, formError, formControl }: Props) => {
  return (
    <FormItem
      name={name}
      validateStatus={formError ? "error" : ""}
      help={formError && <ErrorMessage message={formError} />}
    >
      <div>
        <label htmlFor="email">
          {label} <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <PhoneNumberInput
              defaultCountry="AM"
              placeholder="Enter phone number"
              onChange={onChange}
              value={value}
            />
          )}
          name={name}
          control={formControl}
        />
      </div>
    </FormItem>
  );
};

export default PhoneFormField;
