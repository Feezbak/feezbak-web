import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dropIn } from "@/constants";
import { CustomPagination } from "@/shared";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackComments } from "@/api";
import { CommentPaginatedDataType } from "@/constants";
import Image from "./components/Image";
import Comments from "./components/Comments";
import { ModalWrapper, ContentWrapper, FixedWrapper } from "./styles";

interface Props {
  storyId?: string;
  imageId?: string;
  respBtnId?: string;
  imageSrc?: string;
}

const CommentsModalContent = ({
  storyId,
  imageId,
  respBtnId,
  imageSrc,
}: Props) => {
  const navigate = useNavigate();
  const [commentsData, setCommentsData] =
    useState<CommentPaginatedDataType | null>(null);

  const { run: getCommentsData, loading } = useRequest(
    (page = 1) =>
      getFeedbackComments(storyId!, imageId ?? "", respBtnId ?? "", page),
    {
      onSuccess: (response) => {
        setCommentsData(response.data);
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message ?? "");
      },
    }
  );

  return (
    <ModalWrapper
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ContentWrapper>
        {imageSrc && <Image src={imageSrc} />}
        <Comments isLoading={loading} comments={commentsData?.comments} />
      </ContentWrapper>
      {!!commentsData?.comments?.length && !loading && (
        <FixedWrapper>
          <CustomPagination
            currentPage={commentsData.currentPage}
            setCurrentPage={(page) => getCommentsData(page)}
            pageSize={commentsData.perPage!}
            total={commentsData.commentsCount}
          />
        </FixedWrapper>
      )}
    </ModalWrapper>
  );
};

export default CommentsModalContent;
