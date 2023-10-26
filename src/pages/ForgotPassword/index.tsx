import { ForgotPasswordContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const ForgotPassword = () => {
  return (
    <Layout pageTitle={PageTitleEnums.FORGOT_PASSWORD}>
      <ForgotPasswordContent />
    </Layout>
  );
};

export default ForgotPassword;
