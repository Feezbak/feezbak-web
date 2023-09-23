import { UserCommentsType } from "@/constants";
import { ResponseCommentsWrapper } from "./styles";
import ResponseCommentTile from "../../../../../ResponseCommentTile";
import { CommentsForChoiceBtn } from "../../../../../ResponseBTNTile/styles";

interface Props {
  data: UserCommentsType[];
  totalCommentCount?: number;
}

const ResponseWithOnlyComment = ({ data, totalCommentCount }: Props) => {
  return (
    <ResponseCommentsWrapper xs={24} sm={24} md={17} lg={18} xl={18} xxl={18}>
      {data?.map((commentData, index) => (
        <ResponseCommentTile
          key={commentData._id}
          data={commentData}
          index={index}
        />
      ))}
      {(totalCommentCount ?? 0) > 3 && (
        <CommentsForChoiceBtn $hasMargin={true}>
          Show All {totalCommentCount} Comments
        </CommentsForChoiceBtn>
      )}
    </ResponseCommentsWrapper>
  );
};

export default ResponseWithOnlyComment;
