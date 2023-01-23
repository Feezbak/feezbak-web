import React from "react";
import { StoriesListWrapper } from "./styles";
import StoryItem from "../StoryItem";

const hardcodedData = [
  {
    id: 1,
    question: "Which Shoes should I buy?",
    type: "Image Voting",
    status: "Draft",
  },
  {
    id: 2,
    question: "Interior for my new shop",
    type: "Image Voting",
    status: "Submitted",
  },
];
const StoriesList = () => {
  return (
    <StoriesListWrapper>
      {hardcodedData.map((story) => (
        <StoryItem key={story.id} storyData={story} />
      ))}
    </StoriesListWrapper>
  );
};

export default StoriesList;
