import TitleDescriptionPair from "../../../TitleDescriptionPair";
import { opacityAnimation } from "@assets/framerAnimations";
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
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(link);
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
