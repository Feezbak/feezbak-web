import { useState } from "react";
import TitleDescriptionPair from "../../../TitleDescriptionPair";
import { opacityAnimation } from "@assets/framerAnimations";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <CopyBtn type="primary">{copied ? "Copied!" : "Copy Link"}</CopyBtn>
        </CopyToClipboard>
      </CopyToClipboardWrapper>
    </LinkShareWrapper>
  );
};

export default LinkShare;
