import { SignInContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const SignIn = () => {
  return (
    <Layout pageTitle={PageTitleEnums.SIGNIN}>
      <SignInContent />
    </Layout>
  );
};

export default SignIn;
