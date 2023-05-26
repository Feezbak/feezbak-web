import React, { useState } from "react";
import {
  StoriesListWrapper,
  EmptyStoriesWrapper,
  EmptyStoriesImage,
} from "./styles";
import StoryItem from "../StoryItem";
import { ConfirmModal } from "@/shared";
import emptyStoriesSrc from "@images/empty-stories.png";

const hardcodedData = [
  {
    id: "1",
    question: "Which Shoes should I buy?",
    type: "Image Voting",
    status: "draft",
  },
  {
    id: "2",
    question: "Interior for my new shop",
    type: "Image Voting",
    status: "submitted",
  },
];
const StoriesList = () => {
  const [removeId, setRemoveIdState] = useState("");

  const handleDelete = (id: string) => {
    setRemoveIdState(id);
  };

  return (
    <>
      {!hardcodedData?.length ? (
        <StoriesListWrapper>
          {hardcodedData.map((story) => (
            <StoryItem
              key={story.id}
              storyData={story}
              handleDelete={handleDelete}
            />
          ))}
        </StoriesListWrapper>
      ) : (
        <EmptyStoriesWrapper>
          <EmptyStoriesImage
            src={emptyStoriesSrc}
            alt="No stories yet"
            loading="lazy"
          />
          <h2>It’s ok not to have stories!</h2>
          <p>
            Stories are ways to understand how people think about a certain part
            of your business or product, create one now.!
          </p>
        </EmptyStoriesWrapper>
      )}
      <ConfirmModal
        title="Why are you deleting."
        text="We’re sorry to hear this but if you already made up your
              mind, It’s Ok"
        negativeBtnAction={() => setRemoveIdState("")}
        positiveBtnAction={() => setRemoveIdState("")}
        negativeBtnText="Cancel"
        positiveBtnText="Yes Delete"
        modalIsOpen={!!removeId}
        closeModal={() => setRemoveIdState("")}
      />
    </>
  );
};

export default StoriesList;
