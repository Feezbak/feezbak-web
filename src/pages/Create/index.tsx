import { CreateStoryContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Create = () => {
  return (
    <Layout pageTitle={PageTitleEnums.CREATE_STORY} isAnimated={false}>
      <CreateStoryContent />
    </Layout>
  );
};

export default Create;
