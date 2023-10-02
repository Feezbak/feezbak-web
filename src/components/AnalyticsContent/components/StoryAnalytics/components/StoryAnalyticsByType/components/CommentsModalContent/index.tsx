import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dropIn } from "@/constants";
import { ModalWrapper } from "./styles";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackComments } from "@/api";

interface Props {
  storyId?: string;
  imageId?: string;
  respBtnId?: string;
}

const CommentsModalContent = ({ storyId, imageId, respBtnId }: Props) => {
  const navigate = useNavigate();
  //  const [commentsData, setCommentsData] = useState();

  const { run: getCommentsData } = useRequest(
    (page: number) =>
      getFeedbackComments(storyId!, imageId ?? "", respBtnId ?? "", page),
    {
      manual: true,
      onSuccess: (response: any) => {
        console.log(response, 5555);
        //        setCommentData(response.data);
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message ?? "");
      },
    }
  );

  useEffect(() => {
    getCommentsData(1);
  }, []);

  return (
    <ModalWrapper
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      content
    </ModalWrapper>
  );
};

export default CommentsModalContent;
