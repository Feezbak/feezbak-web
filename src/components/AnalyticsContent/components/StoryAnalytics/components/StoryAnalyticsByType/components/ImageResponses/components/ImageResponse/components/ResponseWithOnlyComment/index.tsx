import { UserCommentsType } from "@/constants";
import { ResponseCommentsWrapper } from "./styles";
import ResponseCommentTile from "../ResponseCommentTile";
import { CommentsForChoiceBtn } from "../ResponseBTNTile/styles";

interface Props {
  data: UserCommentsType[];
}

const ResponseWithOnlyComment = ({ data }: Props) => {
  return (
    <ResponseCommentsWrapper xs={24} sm={24} md={17} lg={18} xl={18} xxl={18}>
      {data?.map((commentData, index) => (
        <ResponseCommentTile
          key={commentData._id}
          data={commentData}
          index={index}
        />
      ))}
      <CommentsForChoiceBtn $hasMargin={true}>
        Show All Comments
      </CommentsForChoiceBtn>
    </ResponseCommentsWrapper>
  );
};

export default ResponseWithOnlyComment;
