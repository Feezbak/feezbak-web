import { Controller, Control } from "react-hook-form";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { FormItem, CustomisedInput, CustomisedInputPassword } from "./styles";
import { ErrorMessage } from "@/shared";

interface Props {
  formError?: string;
  label: string;
  type?: string;
  name: string;
  formControl: Control;
  inputHeight?: string;
  autoComplete?: string;
  isPassword?: boolean;
  disabled?: boolean;
}

const TextFormField = ({
  type,
  name,
  label,
  formError,
  formControl,
  inputHeight = "3",
  autoComplete,
  isPassword = false,
  disabled = false,
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
          render={({ field: { onChange, value } }) =>
            isPassword ? (
              <CustomisedInputPassword
                $height={inputHeight}
                type={type}
                size="large"
                onChange={onChange}
                value={value}
                disabled={disabled}
                autoComplete={autoComplete}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            ) : (
              <CustomisedInput
                $height={inputHeight}
                type={type}
                size="large"
                disabled={disabled}
                onChange={onChange}
                value={value}
                autoComplete={autoComplete}
              />
            )
          }
          name={name}
          control={formControl}
        />
      </div>
    </FormItem>
  );
};

export default TextFormField;
