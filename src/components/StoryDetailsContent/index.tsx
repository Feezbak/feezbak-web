import { useMemo, useState } from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks";
import useRequest from "@ahooksjs/use-request";
import { getStoryById } from "@/api";
import { message, Button } from "antd";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import dayjs from "dayjs";
import { ProductLogoBlack } from "@/icons";
import duration from "dayjs/plugin/duration";
import {
  StoryDetailsContentWrapper,
  DetailsSkeleton,
  LogoContainer,
  ShareNudgeBar,
} from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

dayjs.extend(duration);

const DashboardContent = () => {
  const { id: storyId } = useParams();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [linkCopied, setLinkCopied] = useState(false);

  const { data: story, loading: storyDataLoading } = useRequest(
    () => getStoryById(storyId!),
    {
      onError: async (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        await message.error(getErrorMessage(error));
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
        sm={18}
        md={14}
        lg={12}
        xl={10}
        xxl={8}
      >
        <Breadcrumb
          style={{ marginBottom: "1rem" }}
          items={[
            { title: <Link to="/dashboard">Stories</Link> },
            { title: "Story Details" },
          ]}
        />
        <LogoContainer>
          <Link to="/dashboard">
            <ProductLogoBlack />
          </Link>
        </LogoContainer>
        <Header />
        {isNewCreated && shareableLink && (
          <ShareNudgeBar>
            <p>🎉 Your story is live! Share it now</p>
            <div>
              <Button
                type="primary"
                size="small"
                href={`https://wa.me/?text=${encodeURIComponent(
                  shareableLink
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on WhatsApp
              </Button>
              <Button
                size="small"
                onClick={() => {
                  navigator.clipboard.writeText(shareableLink);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), 2000);
                }}
              >
                {linkCopied ? "Copied!" : "Copy Link"}
              </Button>
            </div>
          </ShareNudgeBar>
        )}
        {!storyDataLoading && story?.data ? (
          <Details
            title={story.data.titleText}
            background={story.data.background}
            link={shareableLink}
            emailsDefault={story.data?.invitedFriendsEmails}
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
