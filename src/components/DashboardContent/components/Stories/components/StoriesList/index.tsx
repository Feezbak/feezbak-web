import React from "react";
import { StoriesListWrapper } from "./styles";
import StoryItem from "../StoryItem";

const hardcodedData = [{ id: 1 }, { id: 2 }];
const StoriesList = () => {
  return (
    <StoriesListWrapper>
      {hardcodedData.map((story) => (
        <StoryItem key={story.id} />
      ))}
    </StoriesListWrapper>
  );
};

export default StoriesList;
