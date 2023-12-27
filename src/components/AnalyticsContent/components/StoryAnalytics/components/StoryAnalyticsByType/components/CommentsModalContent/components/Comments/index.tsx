import { AnimatePresence } from "framer-motion";
import { Skeleton } from "antd";
import ResponseCommentTile from "../../../ResponseCommentTile";
import { opacityAnimation } from "@assets/framerAnimations";
import { UserCommentsType } from "@/constants";
import { CloseXblackIcon } from "@/icons";
import {
  CommentsSkeletonWrapper,
  CommentsContainer,
  CommentsWrapper,
  CommentHeader,
  CloseBtn,
  Heading,
} from "./styles";

interface Props {
  isLoading: boolean;
  comments?: UserCommentsType[];
  closeModal: () => void;
}

const Comments = ({ isLoading, comments, closeModal }: Props) => {
  return (
    <CommentsWrapper xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
      <CommentHeader>
        <Heading>See All Comments</Heading>
        <CloseBtn onClick={closeModal} icon={CloseXblackIcon} />
      </CommentHeader>
      <AnimatePresence>
        {isLoading ? (
          <CommentsSkeletonWrapper {...opacityAnimation}>
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
            <Skeleton avatar paragraph={{ rows: 2 }} />
          </CommentsSkeletonWrapper>
        ) : (
          <CommentsContainer {...opacityAnimation}>
            {comments?.map((comment) => (
              <ResponseCommentTile
                key={comment._id}
                data={comment}
                hasHorizontalPadding={false}
              />
            ))}
          </CommentsContainer>
        )}
      </AnimatePresence>
    </CommentsWrapper>
  );
};

export default Comments;
