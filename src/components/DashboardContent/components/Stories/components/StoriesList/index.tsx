import { useState, useCallback } from "react";
import { ConfirmModal, CustomPagination } from "@/shared";
import useRequest from "@ahooksjs/use-request";
import { getStories, deleteStory } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import emptyStoriesSrc from "@images/empty-stories.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { opacityAnimation } from "@assets/framerAnimations";
import ListHeader from "./components/ListHeader";
import StoryItem from "./components/StoryItem";
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
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? +page : 1);
  const [storiesPaginatedData, setStoriesPaginatedData] =
    useState<StoriesListI | null>(null);
  const [removeId, setRemoveIdState] = useState("");

  const { run: getStoriesPaginatedData, loading: isLoading } = useRequest(
    (page) => getStories(page ? page : currentPage),
    {
      onSuccess: (resp) => {
        resp?.data && setStoriesPaginatedData(resp.data);
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  const { run: runDeleteStory, loading } = useRequest((id) => deleteStory(id), {
    manual: true,
    onSuccess: async () => {
      try {
        let page = currentPage;
        if (storiesPaginatedData!.total % 5 === 1) {
          page = !!(currentPage - 1) ? currentPage - 1 : 1;
          navigate(`?page=${page}`);
          setCurrentPage(page);
        }
        const updatedPageData = await getStories(page);
        updatedPageData?.data && setStoriesPaginatedData(updatedPageData.data);
      } catch (error: any) {
        message.error(error?.response?.data?.message);
      }
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message);
    },
  });

  const handleDelete = useCallback((id: string) => {
    setRemoveIdState(id);
  }, []);

  const handleRunDelete = async () => {
    await runDeleteStory(removeId);
    setRemoveIdState("");
  };

  const handleSetCurrentPage = async (page: number) => {
    setCurrentPage(page);
    await getStoriesPaginatedData(page);
  };

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
            {!!storiesPaginatedData.total && <ListHeader />}
            <StoriesListWrapper {...opacityAnimation}>
              {storiesPaginatedData?.stories?.map((story: any) => (
                <StoryItem
                  storyId={story._id}
                  key={story._id}
                  storyData={story}
                  loading={loading}
                  handleDelete={handleDelete}
                />
              ))}
            </StoriesListWrapper>
            {storiesPaginatedData.total > storiesPaginatedData.limit && (
              <CustomPagination
                currentPage={currentPage}
                setCurrentPage={handleSetCurrentPage}
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
        positiveBtnAction={handleRunDelete}
        negativeBtnText="Cancel"
        positiveBtnText="Yes Delete"
        modalIsOpen={!!removeId}
        closeModal={() => setRemoveIdState("")}
      />
    </>
  );
};

export default StoriesList;
