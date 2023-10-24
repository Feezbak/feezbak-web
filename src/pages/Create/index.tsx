import { CreateStoryContent } from "@/components";
import { Layout } from "@/shared";

const Create = () => {
  return (
    <Layout pageTitle="Create Story" isAnimated={false}>
      <CreateStoryContent />
    </Layout>
  );
};

export default Create;
