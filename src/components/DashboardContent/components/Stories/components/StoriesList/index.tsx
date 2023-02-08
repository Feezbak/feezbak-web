import React, { useState } from "react";
import { StoriesListWrapper } from "./styles";
import StoryItem from "../StoryItem";
import { ConfirmModal } from "@/shared";

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
      <StoriesListWrapper>
        {hardcodedData.map((story) => (
          <StoryItem
            key={story.id}
            storyData={story}
            handleDelete={handleDelete}
          />
        ))}
      </StoriesListWrapper>
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
