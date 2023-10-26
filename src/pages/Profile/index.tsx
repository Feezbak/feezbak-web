import { ProfileContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Profile = () => {
  return (
    <Layout pageTitle={PageTitleEnums.PROFILE}>
      <ProfileContent />
    </Layout>
  );
};

export default Profile;
