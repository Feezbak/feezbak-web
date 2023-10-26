import { StoryDetailsContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const StoryDetails = () => {
  return (
    <Layout pageTitle={PageTitleEnums.STORY_DETAILS}>
      <StoryDetailsContent />
    </Layout>
  );
};

export default StoryDetails;
