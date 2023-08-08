import { DragIcon } from "@/icons";
import { FormItemWrapper, Content, FieldName } from "./styles";

interface Props {
  fieldName: string;
}

const FormItem = ({ fieldName }: Props) => {
  return (
    <FormItemWrapper>
      <Content>
        <DragIcon />
        <FieldName>{fieldName}</FieldName>
      </Content>
    </FormItemWrapper>
  );
};

export default FormItem;
