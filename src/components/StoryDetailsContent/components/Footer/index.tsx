import useRequest from "@ahooksjs/use-request";
import { message } from "antd";
import { createStory } from "@/api";
import { useNavigate } from "react-router-dom";
import {
  DetailsFooterWrapper,
  FooterTextWithLink,
  Description,
} from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const Footer = () => {
  const navigate = useNavigate();

  const { run: createNewStory } = useRequest(() => createStory(), {
    manual: true,
    onSuccess: (resp) => {
      localStorage.setItem(resp.data._id, JSON.stringify({}));
      navigate(`/create-story/${resp.data._id}`);
    },
    onError: (error: any) => {
      message.error(getErrorMessage(error));
    },
  });
  const handleCreateStory = async () => {
    await createNewStory();
  };

  return (
    <DetailsFooterWrapper>
      <Description>
        This link will be in your account you can send it to your friends
        anytime you want
      </Description>
      <FooterTextWithLink>
        Ready to create new Story?{" "}
        <span onClick={handleCreateStory}>Create new story</span>
      </FooterTextWithLink>
    </DetailsFooterWrapper>
  );
};

export default Footer;
