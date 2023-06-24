import React, { useEffect, useState } from "react";
import StoryItem from "../StoryItem";
import { ConfirmModal } from "@/shared";
import useRequest from "@ahooksjs/use-request";
import { getStories } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import emptyStoriesSrc from "@images/empty-stories.png";
import { useLocation } from "react-router-dom";
import { opacityAnimation } from "@assets/framerAnimations";
import StoriesPagination from "./components/StoriesPagination";
import {
  EmptyStoriesWrapper,
  StoriesListWrapper,
  EmptyStoriesImage,
  SkeletonsWrapper,
  StorySkeleton,
} from "./styles";

type StoryListItem = {
  id: string;
  title: string;
  progress: string;
};

interface StoriesListI {
  limit: number;
  offset: null;
  total: 1;
  stories: StoryListItem[];
}

const StoriesList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? +page : 1);
  const [storiesPaginatedData, setStoriesPaginatedData] =
    useState<StoriesListI | null>(null);
  const [removeId, setRemoveIdState] = useState("");

  const handleDelete = (id: string) => {
    setRemoveIdState(id);
  };

  const { run: getStoriesPaginatedData, loading: isLoading } = useRequest(
    (page) => getStories(page),
    {
      manual: true,
      onSuccess: (resp) => {
        resp?.data && setStoriesPaginatedData(resp.data);
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    (() => getStoriesPaginatedData(currentPage))();
  }, [currentPage, getStoriesPaginatedData]);

  return (
    <>
      <AnimatePresence initial={false}>
        {isLoading ? (
          <SkeletonsWrapper>
            {[1, 2, 3].map((item) => (
              <StorySkeleton
                key={item}
                active={true}
                size="large"
                block={true}
              />
            ))}
          </SkeletonsWrapper>
        ) : storiesPaginatedData && storiesPaginatedData?.total >= 1 ? (
          <>
            <StoriesListWrapper {...opacityAnimation}>
              {storiesPaginatedData?.stories?.map((story: any) => (
                <StoryItem
                  storyId={story._id}
                  key={story._id}
                  storyData={story}
                  handleDelete={handleDelete}
                />
              ))}
            </StoriesListWrapper>
            {storiesPaginatedData.total > storiesPaginatedData.limit && (
              <StoriesPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={storiesPaginatedData.limit}
                total={storiesPaginatedData.total}
              />
            )}
          </>
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
