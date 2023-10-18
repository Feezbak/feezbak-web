import { FormHeadingWrapper, DescriptionContainer, SubmitBtn } from "./styles";

interface Props {
  loading: boolean;
  isDirty: boolean;
  isValid: boolean;
}

const Heading = ({ loading, isDirty, isValid }: Props) => {
  return (
    <FormHeadingWrapper>
      <DescriptionContainer>
        <h3>Profile Settings</h3>
        <p>All your personal information are found here.</p>
      </DescriptionContainer>
      <SubmitBtn
        type="primary"
        htmlType="submit"
        size="large"
        loading={loading}
        disabled={!isDirty || !isValid}
      >
        Save Changes
      </SubmitBtn>
    </FormHeadingWrapper>
  );
};

export default Heading;
