import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dropIn } from "@/constants";
import { CustomPagination } from "@/shared";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackComments } from "@/api";
import { CommentPaginatedDataType } from "@/constants";
import { ModalWrapper } from "./styles";

interface Props {
  storyId?: string;
  imageId?: string;
  respBtnId?: string;
}

const CommentsModalContent = ({ storyId, imageId, respBtnId }: Props) => {
  const navigate = useNavigate();
  const [commentsData, setCommentsData] =
    useState<CommentPaginatedDataType | null>(null);

  const { run: getCommentsData } = useRequest(
    (page = 1) =>
      getFeedbackComments(storyId!, imageId ?? "", respBtnId ?? "", page),
    {
      onSuccess: (response: any) => {
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
      {!!commentsData?.comments?.length && (
        <CustomPagination
          currentPage={commentsData.currentPage}
          setCurrentPage={(page) => getCommentsData(page)}
          pageSize={commentsData.perPage!}
          total={commentsData.commentsCount}
        />
      )}
    </ModalWrapper>
  );
};

export default CommentsModalContent;
