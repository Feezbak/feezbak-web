import { UserCommentsType } from "@/constants";
import { ResponseCommentsWrapper } from "./styles";
import ResponseCommentTile from "../ResponseCommentTile";

interface Props {
  data: UserCommentsType[];
}

const ResponseWithOnlyComment = ({ data }: Props) => {
  return (
    <ResponseCommentsWrapper>
      {data?.map((commentData) => (
        <ResponseCommentTile key={commentData._id} data={commentData} />
      ))}
    </ResponseCommentsWrapper>
  );
};

export default ResponseWithOnlyComment;
