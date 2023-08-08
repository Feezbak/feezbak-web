import { Switch } from "antd";
import { MultipleSelectionWrapper, ActionTitle } from "./styles";

interface Props {
  onChange: (value: boolean) => void;
  defaultValue: boolean;
}

const MultipleSelection = ({ onChange, defaultValue }: Props) => {
  return (
    <MultipleSelectionWrapper>
      <ActionTitle>Multiple Answer</ActionTitle>
      <Switch defaultChecked={defaultValue} onChange={onChange} />
    </MultipleSelectionWrapper>
  );
};

export default MultipleSelection;
