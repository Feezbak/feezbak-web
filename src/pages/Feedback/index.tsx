import { FeedbackerContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Feedback = () => {
  return (
    <Layout pageTitle={PageTitleEnums.FEEDBACK}>
      <FeedbackerContent />
    </Layout>
  );
};

export default Feedback;
