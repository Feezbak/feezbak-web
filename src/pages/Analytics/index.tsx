import { AnalyticsContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Analytics = () => {
  return (
    <Layout pageTitle={PageTitleEnums.ANALYTICS}>
      <AnalyticsContent />
    </Layout>
  );
};

export default Analytics;
