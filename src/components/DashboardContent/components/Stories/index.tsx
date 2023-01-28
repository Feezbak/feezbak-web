import React from "react";
import StoriesList from "./components/StoriesList";
import StoriesWelcomeBanner from "./components/StoriesWelcomeBanner";
import { StoriesListHeader, StoriesContent, StoriesWrapper } from "./styles";
import { Button } from "antd";

const Stories = () => {
  return (
    <StoriesWrapper align="stretch" justify="space-between" wrap>
      <StoriesWelcomeBanner />
      <StoriesContent xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <StoriesListHeader>
          <h3>Your Feedback Stories</h3>
          <Button type="primary">Create Feedback</Button>
        </StoriesListHeader>
        <StoriesList />
      </StoriesContent>
    </StoriesWrapper>
  );
};

export default Stories;
