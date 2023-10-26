import { UserDataVerificationContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Verify = () => {
  return (
    <Layout pageTitle={PageTitleEnums.VERIFY}>
      <UserDataVerificationContent />
    </Layout>
  );
};

export default Verify;
