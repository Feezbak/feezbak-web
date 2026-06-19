import { useState } from "react";
import StoriesList from "./components/StoriesList";
import StoriesWelcomeBanner from "./components/StoriesWelcomeBanner";
import useRequest from "@ahooksjs/use-request";
import { useNavigate } from "react-router-dom";
import { createStory } from "@/api";
import { Button, message } from "antd";
import { useResponsive } from "@/hooks";
import { StoriesListHeader, StoriesContent, StoriesWrapper } from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";
import UpgradeModal from "@/components/UpgradeModal";

const Stories = () => {
  const { isLessThanSm } = useResponsive();
  const navigate = useNavigate();
  const [showUpgrade, setShowUpgrade] = useState(false);

  const { run: createNewStory, loading: isLoading } = useRequest(
    () => createStory(),
    {
      manual: true,
      onSuccess: (resp) => {
        localStorage.setItem(resp.data._id, JSON.stringify({ __v: "1" }));
        navigate(`/create-story/${resp.data._id}`);
      },
      onError: (error: any) => {
        const msg = getErrorMessage(error);
        if (error?.response?.status === 403) {
          setShowUpgrade(true);
        } else {
          message.error(msg);
        }
      },
    }
  );

  const handleCreateStory = () => {
    createNewStory();
  };

  return (
    <StoriesWrapper align="stretch" justify="space-between" wrap>
      {!isLessThanSm && <StoriesWelcomeBanner />}
      <StoriesContent xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <StoriesListHeader>
          <h3>Your Feedback Stories</h3>
          <Button
            type="default"
            size="large"
            onClick={handleCreateStory}
            loading={isLoading}
          >
            Create Story
          </Button>
        </StoriesListHeader>
        <StoriesList
          onCreateStory={handleCreateStory}
          isCreating={isLoading}
          onUpgrade={() => setShowUpgrade(true)}
        />
      </StoriesContent>
      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
        reason="Free plan is limited to 3 stories. Upgrade to Pro for unlimited stories."
      />
    </StoriesWrapper>
  );
};

export default Stories;
