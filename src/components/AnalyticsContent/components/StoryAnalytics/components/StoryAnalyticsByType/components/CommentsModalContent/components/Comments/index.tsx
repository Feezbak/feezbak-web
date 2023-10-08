import { AnimatePresence } from "framer-motion";
import { Skeleton } from "antd";
import ResponseCommentTile from "../../../ResponseCommentTile";
import { opacityAnimation } from "@assets/framerAnimations";
import {
  CommentsWrapper,
  CommentsSkeletonWrapper,
  CommentsContainer,
} from "./styles";
import { UserCommentsType } from "@/constants";

interface Props {
  isLoading: boolean;
  comments?: UserCommentsType[];
}

const Comments = ({ isLoading, comments }: Props) => {
  return (
    <CommentsWrapper xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
      <AnimatePresence>
        {isLoading ? (
          <CommentsSkeletonWrapper {...opacityAnimation}>
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
          </CommentsSkeletonWrapper>
        ) : (
          <CommentsContainer {...opacityAnimation}>
            {comments?.map((comment) => (
              <ResponseCommentTile key={comment._id} data={comment} />
            ))}
          </CommentsContainer>
        )}
      </AnimatePresence>
    </CommentsWrapper>
  );
};

export default Comments;
