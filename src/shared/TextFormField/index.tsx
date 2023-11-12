import { Controller, Control } from "react-hook-form";
import { FormItem, CustomisedInput } from "./styles";
import { ErrorMessage } from "@/shared";
import { ContactsCollectingInputs } from "@/validations";

interface Props {
  formError?: string;
  label: string;
  type?: string;
  name: keyof ContactsCollectingInputs;
  formControl: Control<ContactsCollectingInputs>;
  inputHeight?: string;
}

const TextFormField = ({
  type,
  name,
  label,
  formError,
  formControl,
  inputHeight = "3",
}: Props) => {
  return (
    <FormItem
      name={name}
      validateStatus={formError ? "error" : ""}
      help={formError && <ErrorMessage message={formError} />}
    >
      <div>
        <label htmlFor={name}>
          {label} <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <CustomisedInput
              $height={inputHeight}
              type={type}
              size="large"
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

export default TextFormField;
