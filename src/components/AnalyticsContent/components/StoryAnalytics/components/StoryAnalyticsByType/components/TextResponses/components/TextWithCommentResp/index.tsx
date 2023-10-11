import { useState, useRef, useEffect } from "react";
import { UserCommentsType } from "@/constants";
import { CustomPagination } from "@/shared";
import { message } from "antd";
import { useQuery } from "@/hooks";
import useRequest from "@ahooksjs/use-request";
import { useNavigate, useParams } from "react-router-dom";
import { getFeedbackComments } from "@/api";
import ResponseCommentTile from "../../../ResponseCommentTile";
import { CommentsListWrapper } from "./styles";

interface Props {
  feedbacksPaginatedData: any;
}

const TextWithCommentResp = ({ feedbacksPaginatedData }: Props) => {
  const commentsWrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { storyId } = useParams();
  const query = useQuery();
  const page = query.get("page");
  const [commentsData, setCommentData] = useState(
    !page && feedbacksPaginatedData
  );

  const { run: getCommentsData, loading } = useRequest(
    (page: number) => getFeedbackComments(storyId!, "", "", page),
    {
      manual: true,
      onSuccess: (response: any) => {
        setCommentData(response.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message ?? "");
      },
    }
  );

  const handleSetCurrentPage = async (page: number) => {
    await getCommentsData(page);
  };

  useEffect(() => {
    page && handleSetCurrentPage(+page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommentsListWrapper ref={commentsWrapperRef}>
      {commentsData?.comments?.map((singleComment: UserCommentsType) => (
        <ResponseCommentTile key={singleComment._id} data={singleComment} />
      ))}
      {!!commentsData?.comments?.length &&
        commentsData?.commentsCount > commentsData.perPage &&
        !loading && (
          <CustomPagination
            currentPage={commentsData.currentPage}
            setCurrentPage={handleSetCurrentPage}
            pageSize={commentsData.perPage!}
            total={commentsData.commentsCount}
          />
        )}
    </CommentsListWrapper>
  );
};

export default TextWithCommentResp;
