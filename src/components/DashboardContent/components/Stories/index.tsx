import React from "react";
import StoriesList from "./components/StoriesList";
import { StoriesListHeader } from "./styles";
import { Button } from "antd";

const Stories = () => {
  return (
    <div>
      <StoriesListHeader>
        <h3>Your Feedback Stories</h3>
        <Button type="primary">Create Story</Button>
      </StoriesListHeader>
      <StoriesList />
    </div>
  );
};

export default Stories;
