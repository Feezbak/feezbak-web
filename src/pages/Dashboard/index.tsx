import { DashboardContent } from "@/components";
import { Layout } from "@/shared";
import { PageTitleEnums } from "@/enums";

const Dashboard = () => {
  return (
    <Layout pageTitle={PageTitleEnums.DASHBOARD}>
      <DashboardContent />
    </Layout>
  );
};

export default Dashboard;
