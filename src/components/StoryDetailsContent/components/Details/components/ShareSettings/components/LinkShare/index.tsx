import TitleDescriptionPair from "../../../TitleDescriptionPair";
import { opacityAnimation } from "@assets/framerAnimations";
import {
  LinkShareWrapper,
  CopyToClipboardWrapper,
  LinkContainer,
  CopyBtn,
} from "./styles";
import { message } from "antd";

interface Props {
  link: string;
}

const LinkShare = ({ link }: Props) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("link");
      message.destroy();
      message.success("The link was successfully copied!");
    } catch (error) {
      message.destroy();
      message.error("Something went wrong while copying the link!");
      console.error("Failed to copy Link: ", error);
    }
  };

  return (
    <LinkShareWrapper {...opacityAnimation}>
      <TitleDescriptionPair
        title="Link to share"
        text="Share this link with anyone you want feedback from"
      />
      <CopyToClipboardWrapper>
        <LinkContainer>
          <p>{link}</p>
        </LinkContainer>
        <CopyBtn onClick={handleCopyToClipboard} type="primary">
          Copy Link
        </CopyBtn>
      </CopyToClipboardWrapper>
    </LinkShareWrapper>
  );
};

export default LinkShare;
