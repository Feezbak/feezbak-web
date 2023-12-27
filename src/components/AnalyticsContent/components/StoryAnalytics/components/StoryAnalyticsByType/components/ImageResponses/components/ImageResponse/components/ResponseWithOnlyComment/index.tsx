import { UserCommentsType } from "@/constants";
import { ResponseCommentsWrapper } from "./styles";
import ResponseCommentTile from "../../../../../ResponseCommentTile";
import { CommentsForChoiceBtn } from "../../../../../ResponseBTNTile/styles";

interface Props {
  data: UserCommentsType[];
  totalCommentCount?: number;
  handleSeeMoreComments: () => void;
}

const ResponseWithOnlyComment = ({
  data,
  totalCommentCount,
  handleSeeMoreComments,
}: Props) => {
  return (
    <ResponseCommentsWrapper xs={24} sm={24} md={17} lg={18} xl={18} xxl={18}>
      {data?.map((commentData) => (
        <ResponseCommentTile key={commentData._id} data={commentData} />
      ))}
      {(totalCommentCount ?? 0) > 3 && (
        <CommentsForChoiceBtn $hasMargin={true} onClick={handleSeeMoreComments}>
          Show All {totalCommentCount} Comments
        </CommentsForChoiceBtn>
      )}
    </ResponseCommentsWrapper>
  );
};

export default ResponseWithOnlyComment;
