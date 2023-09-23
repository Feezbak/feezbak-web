import { useState } from "react";
import { UserCommentsType } from "@/constants";
import ResponseCommentTile from "../../../ResponseCommentTile";
import { CommentsListWrapper } from "./styles";

interface Props {
  feedbacksPaginatedData: any;
}

const TextWithCommentResp = ({ feedbacksPaginatedData }: Props) => {
  const [commentsData] = useState(feedbacksPaginatedData);

  return (
    <CommentsListWrapper>
      {commentsData.comments.map((singleComment: UserCommentsType) => (
        <ResponseCommentTile key={singleComment._id} data={singleComment} />
      ))}
    </CommentsListWrapper>
  );
};

export default TextWithCommentResp;
