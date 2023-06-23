import React from "react";
import StoriesList from "./components/StoriesList";
import StoriesWelcomeBanner from "./components/StoriesWelcomeBanner";
import useRequest from "@ahooksjs/use-request";
import { useNavigate } from "react-router-dom";
import { createStory } from "@/api";
import { Button, message } from "antd";
import { StoriesListHeader, StoriesContent, StoriesWrapper } from "./styles";

const Stories = () => {
  const navigate = useNavigate();

  const { run: createNewStory, loading: isLoading } = useRequest(
    () => createStory(),
    {
      manual: true,
      onSuccess: (resp) => {
        localStorage.setItem(resp.data._id, JSON.stringify({}));
        navigate(`/create-story/${resp.data._id}`);
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message ?? "");
      },
    }
  );

  const handleCreateStory = () => createNewStory();

  return (
    <StoriesWrapper align="stretch" justify="space-between" wrap>
      <StoriesWelcomeBanner />
      <StoriesContent xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <StoriesListHeader>
          <h3>Your Feedback Stories</h3>
          <Button
            type="primary"
            onClick={handleCreateStory}
            loading={isLoading}
          >
            Create Story
          </Button>
        </StoriesListHeader>
        <StoriesList />
      </StoriesContent>
    </StoriesWrapper>
  );
};

export default Stories;
