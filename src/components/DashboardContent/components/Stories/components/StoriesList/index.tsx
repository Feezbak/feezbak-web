import React, { useState } from "react";
import StoryItem from "../StoryItem";
import { ConfirmModal } from "@/shared";
import useRequest from "@ahooksjs/use-request";
import { getStories } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import emptyStoriesSrc from "@images/empty-stories.png";
import {
  EmptyStoriesWrapper,
  StoriesListWrapper,
  EmptyStoriesImage,
  SkeletonsWrapper,
  StorySkeleton,
} from "./styles";
import { opacityAnimation } from "@assets/framerAnimations";

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
  {
    id: "3",
    question: "Interior for my new shop",
    type: "Image Voting",
    status: "submitted",
  },
  {
    id: "4",
    question: "Interior for my new shop",
    type: "Image Voting",
    status: "submitted",
  },
  {
    id: "5",
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

  const { loading: isLoading } = useRequest(() => getStories(), {
    onSuccess: (resp) => {
      console.log(resp, 4444);
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message ?? "");
    },
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {isLoading ? (
          <SkeletonsWrapper>
            {[1, 2, 3].map((item) => (
              <StorySkeleton key={item} />
            ))}
          </SkeletonsWrapper>
        ) : hardcodedData?.length ? (
          <StoriesListWrapper {...opacityAnimation}>
            {hardcodedData.map((story) => (
              <StoryItem
                key={story.id}
                storyData={story}
                handleDelete={handleDelete}
              />
            ))}
          </StoriesListWrapper>
        ) : (
          <EmptyStoriesWrapper {...opacityAnimation}>
            <EmptyStoriesImage
              src={emptyStoriesSrc}
              alt="No stories yet"
              loading="lazy"
            />
            <h2>It’s ok not to have stories!</h2>
            <p>
              Stories are ways to understand how people think about a certain
              part of your business or product, create one now.!
            </p>
          </EmptyStoriesWrapper>
        )}
      </AnimatePresence>
      {isLoading}
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
