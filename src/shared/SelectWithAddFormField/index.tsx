import { Control, Controller } from "react-hook-form";
import { FormItem } from "./styles";
import { SelectWithAdd } from "@/shared";

interface Props {
  label: string;
  name: string;
  formControl: Control;
}

const SelectWithAddFormField = ({ formControl, name, label }: Props) => {
  return (
    <FormItem name={name}>
      <div>
        <label htmlFor={name}>{label}</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <SelectWithAdd value={value} onChange={onChange} />
          )}
          name={name}
          control={formControl}
        />
      </div>
    </FormItem>
  );
};

export default SelectWithAddFormField;
