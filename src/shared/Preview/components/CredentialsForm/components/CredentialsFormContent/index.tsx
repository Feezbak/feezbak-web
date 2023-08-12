import { ContactToData } from "@shared/Preview/components/Demo/types";
import { FormWrapper, SubmitBtn, FormItem, CustomisedInput } from "./styles";

interface Props {
  fields: string[];
  isCreation?: boolean;
  sendContactInfo: (info: ContactToData[]) => void;
}

const CredentialsFormContent = ({
  fields,
  isCreation = true,
  sendContactInfo,
}: Props) => {
  const handleSubmit = (formData: any) => {
    const refactoredData = Object.entries(formData).map((field) => ({
      field: field[0],
      value: field[1] as string,
    }));
    sendContactInfo(refactoredData);
  };

  return (
    <FormWrapper
      name="credentials"
      onFinish={isCreation ? undefined : handleSubmit}
      autoComplete="off"
    >
      {fields.map((field, index) => (
        <FormItem name={field} key={index} rules={[{ required: true }]}>
          <div>
            <label htmlFor={field}>
              {field} <sub>*</sub>
            </label>
            <CustomisedInput disabled={isCreation} />
          </div>
        </FormItem>
      ))}
      <FormItem>
        <SubmitBtn type="primary" htmlType="submit">
          Send My Feedback
        </SubmitBtn>
      </FormItem>
    </FormWrapper>
  );
};

export default CredentialsFormContent;
