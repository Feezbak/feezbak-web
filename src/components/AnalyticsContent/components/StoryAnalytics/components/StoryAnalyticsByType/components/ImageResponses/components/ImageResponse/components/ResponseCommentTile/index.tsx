import { UserCommentsType } from "@/constants";
import { CommentTileWrapper } from "./styles";

interface Props {
  data: UserCommentsType;
}

const ResponseCommentTile = ({ data }: Props) => {
  return <CommentTileWrapper>{data.msg}</CommentTileWrapper>;
};

export default ResponseCommentTile;
