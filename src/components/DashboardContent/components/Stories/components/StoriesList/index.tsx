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
  UsageBanner,
  UsageBarTrack,
  UsageBarFill,
  UsageLabel,
  UpgradeLink,
} from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";

type StoryListItem = {
  id: string;
  title: string;
  progress: string;
};

interface StoriesListI {
  limit: number;
  offset: null;
  total: number;
  stories: StoryListItem[];
}

interface Props {
  onCreateStory: () => void;
  isCreating: boolean;
  onUpgrade: () => void;
}

const UNDO_DELAY_MS = 5000;

const FREE_STORY_LIMIT = 3;

const StoriesList = ({ onCreateStory, isCreating, onUpgrade }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useRecoilValue(userData);
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(page ? +page : 1);
  const [storiesPaginatedData, setStoriesPaginatedData] =
    useState<StoriesListI | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
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
      setStoriesPaginatedData((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          total: prev.total - 1,
          stories: prev.stories.filter((s: any) => s._id !== deletedId),
        };
      });
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

      setPendingDeleteId(id);
      let canceled = false;
      const key = `delete-${id}`;

      const cancel = () => {
        canceled = true;
        setPendingDeleteId(null);
        if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
        api.destroy(key);
      };

      // duration:0 disables antd's own auto-close so onClose never fires
      // from a natural expiry — only our setTimeout controls when to delete.
      // X button → onClose → cancel(). Undo button → cancel() directly.
      api.warning({
        key,
        message: "Story will be deleted",
        description: "You have 5 seconds to undo this action.",
        duration: 0,
        icon: (
          <img
            src={notificationIllustrationSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ),
        btn: (
          <Button size="small" onClick={cancel}>
            Undo
          </Button>
        ),
        onClose: cancel,
      });

      deleteTimerRef.current = setTimeout(() => {
        if (!canceled) {
          runDeleteStory(id);
          api.destroy(key);
        }
      }, UNDO_DELAY_MS);
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
            {user.plan !== "pro" && (
              <UsageBanner>
                <UsageLabel>
                  {storiesPaginatedData.total} / {FREE_STORY_LIMIT} stories used
                </UsageLabel>
                <UsageBarTrack>
                  <UsageBarFill
                    $pct={Math.min(
                      (storiesPaginatedData.total / FREE_STORY_LIMIT) * 100,
                      100
                    )}
                  />
                </UsageBarTrack>
                <UpgradeLink onClick={onUpgrade}>Upgrade</UpgradeLink>
              </UsageBanner>
            )}
            {!!storiesPaginatedData.total && <ListHeader />}
            <StoriesListWrapper>
              {storiesPaginatedData?.stories?.map((story: any) => (
                <StoryItem
                  storyId={story._id}
                  key={story._id}
                  storyData={story}
                  loading={loading}
                  handleDelete={handleDelete}
                  isPendingDelete={story._id === pendingDeleteId}
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
