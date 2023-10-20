import TitleDescriptionPair from "../../../TitleDescriptionPair";
import { opacityAnimation } from "@assets/framerAnimations";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";
import {
  LinkShareWrapper,
  CopyToClipboardWrapper,
  LinkContainer,
  CopyBtn,
} from "./styles";

interface Props {
  link: string;
}

const LinkShare = ({ link }: Props) => {
  const handleCopyToClipboard = async () => {
    message.destroy();
    await message.success("The link was successfully copied!");
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
        <CopyToClipboard text={link} onCopy={handleCopyToClipboard}>
          <CopyBtn type="primary">Copy Link</CopyBtn>
        </CopyToClipboard>
      </CopyToClipboardWrapper>
    </LinkShareWrapper>
  );
};

export default LinkShare;
