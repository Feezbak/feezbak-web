import { SignUpContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const SignUp = () => {
  return (
    <Layout pageTitle={PageTitleEnums.SIGNUP}>
      <SignUpContent />
    </Layout>
  );
};

export default SignUp;
