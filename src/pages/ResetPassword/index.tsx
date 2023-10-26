import { ResetPasswordContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const ResetPassword = () => {
  return (
    <Layout pageTitle={PageTitleEnums.RESET_PASSWORD}>
      <ResetPasswordContent />
    </Layout>
  );
};

export default ResetPassword;
