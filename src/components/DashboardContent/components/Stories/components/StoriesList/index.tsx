import { useState, useCallback, useRef, useEffect } from "react";
import { CustomPagination } from "@/shared";
import useRequest from "@ahooksjs/use-request";
import { getStories, deleteStory } from "@/api";
import { message, Button, notification } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import emptyStoriesSrc from "@images/empty-stories.webp";
import notificationIllustrationSrc from "@images/sammy-line-delivery.webp";
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
import { getErrorMessage } from "@helpers/errorMessage";

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

interface Props {
  onCreateStory: () => void;
  isCreating: boolean;
}

const UNDO_DELAY_MS = 5000;

const StoriesList = ({ onCreateStory, isCreating }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? +page : 1);
  const [storiesPaginatedData, setStoriesPaginatedData] =
    useState<StoriesListI | null>(null);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const saved = sessionStorage.getItem("storiesScrollY");
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem("storiesScrollY");
    }
    return () => {
      sessionStorage.setItem("storiesScrollY", String(window.scrollY));
    };
  }, []);
  const deleteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { run: getStoriesPaginatedData, loading: isLoading } = useRequest(
    (page) => getStories(page ? page : currentPage),
    {
      onSuccess: (resp) => {
        resp?.data && setStoriesPaginatedData(resp.data);
      },
      onError: (error: any) => {
        message.error(getErrorMessage(error));
      },
    }
  );

  const { run: runDeleteStory, loading } = useRequest((id) => deleteStory(id), {
    manual: true,
    onSuccess: async (_, params) => {
      const deletedId = params[0];
      // Immediately remove from local state to prevent the deleted story
      // flashing back after the skeleton disappears
      setStoriesPaginatedData((prev) =>
        prev
          ? {
              ...prev,
              total: prev.total - 1,
              stories: prev.stories.filter((s: any) => s._id !== deletedId),
            }
          : null
      );
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
        message.error(getErrorMessage(error));
      }
    },
    onError: (error: any) => {
      message.error(getErrorMessage(error));
    },
  });

  const handleDelete = useCallback(
    (id: string) => {
      if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);

      let undone = false;
      let executed = false;
      const key = `delete-${id}`;

      // Guard against double-execution: api.destroy() triggers onClose which
      // would call doDelete again without this flag.
      const doDelete = () => {
        if (executed) return;
        executed = true;
        if (!undone) runDeleteStory(id);
        api.destroy(key);
      };

      api.warning({
        key,
        message: "Story will be deleted",
        description: "You have 5 seconds to undo this action.",
        duration: UNDO_DELAY_MS / 1000,
        icon: (
          <img
            src={notificationIllustrationSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ),
        btn: (
          <Button
            size="small"
            onClick={() => {
              undone = true;
              api.destroy(key);
            }}
          >
            Undo
          </Button>
        ),
        onClose: doDelete,
      });

      deleteTimerRef.current = setTimeout(doDelete, UNDO_DELAY_MS);
    },
    [api, runDeleteStory]
  );

  const handleSetCurrentPage = async (page: number) => {
    setCurrentPage(page);
    await getStoriesPaginatedData(page);
  };

  return (
    <>
      {contextHolder}
      <AnimatePresence initial={false} exitBeforeEnter>
        {isLoading ? (
          <SkeletonsWrapper key="skeletons" {...opacityAnimation}>
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
          <motion.div key="list" {...opacityAnimation}>
            {!!storiesPaginatedData.total && <ListHeader />}
            <StoriesListWrapper>
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
          </motion.div>
        ) : (
          <EmptyStoriesWrapper key="empty" {...opacityAnimation}>
            <EmptyStoriesImage
              src={emptyStoriesSrc}
              alt="No stories yet"
              loading="lazy"
            />
            <h2>It's ok not to have stories!</h2>
            <p>
              Stories are ways to understand how people think about a certain
              part of your business or product, create one now.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={onCreateStory}
              loading={isCreating}
              style={{ marginTop: "1rem" }}
            >
              Create your first story →
            </Button>
          </EmptyStoriesWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default StoriesList;
