import { useMemo } from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks";
import useRequest from "@ahooksjs/use-request";
import { getStoryById } from "@/api";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { StoryDetailsContentWrapper, DetailsSkeleton } from "./styles";

dayjs.extend(duration);

const DashboardContent = () => {
  const { id: storyId } = useParams();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const { data: story, loading: storyDataLoading } = useRequest(
    () => getStoryById(storyId!),
    {
      onError: async (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        await message.error(error?.response?.data?.message);
      },
    }
  );

  const isNewCreated = useMemo(() => {
    if (story?.data) {
      const currentDate = dayjs();
      const lastUpdateDate = dayjs(story.data.updatedAt);
      const durationInMinutes = dayjs
        .duration(currentDate.diff(lastUpdateDate))
        .asMinutes();
      return durationInMinutes < 1;
    }
    return false;
  }, [story]);

  const shareableLink = useMemo(() => {
    return story?.data
      ? `${process.env.REACT_APP_FRONT_END_URL}/story/${story.data._id}`
      : "";
  }, [story]);

  return (
    <>
      <StoryDetailsContentWrapper
        xs={22}
        sm={22}
        md={17}
        lg={14}
        xl={11}
        xxl={8}
      >
        <Header />
        {!storyDataLoading && story?.data ? (
          <Details
            link={shareableLink}
            emailsDefault={story?.data?.invitedFriendsEmails}
          />
        ) : (
          <DetailsSkeleton active={true} />
        )}
        <Footer />
      </StoryDetailsContentWrapper>
      {story?.data && !storyDataLoading && isNewCreated && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1200}
        />
      )}
    </>
  );
};

export default DashboardContent;
