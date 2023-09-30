import { useState } from "react";
import { UserCommentsType } from "@/constants";
import { CustomPagination } from "@/shared";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { useNavigate, useParams } from "react-router-dom";
import { getFeedbackComments } from "@/api";
import ResponseCommentTile from "../../../ResponseCommentTile";
import { CommentsListWrapper } from "./styles";

interface Props {
  feedbacksPaginatedData: any;
}

const TextWithCommentResp = ({ feedbacksPaginatedData }: Props) => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [commentsData] = useState(feedbacksPaginatedData);

  const { run: getCommentsData } = useRequest(
    (page: number) => getFeedbackComments(storyId!, "", "", page),
    {
      manual: true,
      onSuccess: (response: any) => {
        console.log(response, 5555);
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

  return (
    <CommentsListWrapper>
      {commentsData.comments.map((singleComment: UserCommentsType) => (
        <ResponseCommentTile key={singleComment._id} data={singleComment} />
      ))}
      <CustomPagination
        currentPage={commentsData.currentPage}
        setCurrentPage={handleSetCurrentPage}
        pageSize={commentsData.perPage!}
        total={commentsData.commentsCount}
      />
    </CommentsListWrapper>
  );
};

export default TextWithCommentResp;
