import StoriesList from "./components/StoriesList";
import StoriesWelcomeBanner from "./components/StoriesWelcomeBanner";
import useRequest from "@ahooksjs/use-request";
import { useNavigate } from "react-router-dom";
import { createStory } from "@/api";
import { Button, message } from "antd";
import { useResponsive } from "@/hooks";
import { StoriesListHeader, StoriesContent, StoriesWrapper } from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const Stories = () => {
  const { isLessThanSm } = useResponsive();
  const navigate = useNavigate();

  const { run: createNewStory, loading: isLoading } = useRequest(
    () => createStory(),
    {
      manual: true,
      onSuccess: (resp) => {
        localStorage.setItem(resp.data._id, JSON.stringify({ __v: "1" }));
        navigate(`/create-story/${resp.data._id}`);
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(getErrorMessage(error));
      },
    }
  );

  return (
    <StoriesWrapper align="stretch" justify="space-between" wrap>
      {!isLessThanSm && <StoriesWelcomeBanner />}
      <StoriesContent xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <StoriesListHeader>
          <h3>Your Feedback Stories</h3>
          <Button
            type="default"
            size="large"
            onClick={createNewStory}
            loading={isLoading}
          >
            Create Story
          </Button>
        </StoriesListHeader>
        <StoriesList onCreateStory={createNewStory} isCreating={isLoading} />
      </StoriesContent>
    </StoriesWrapper>
  );
};

export default Stories;
