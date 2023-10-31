import { useState } from "react";
import { LinkShareEnum } from "@/enums";
import { AnimatePresence } from "framer-motion";
import ShareSegmentSelection from "./components/ShareSegmentSelection";
import LinkShare from "./components/LinkShare";
import QRShare from "./components/QRShare";
import { ShareSettingsWrapper, ShareSettingsTitle } from "./styles";

interface Props {
  link: string;
  title: string;
  background: string;
}

const ShareSettings = ({ link, title, background }: Props) => {
  const [shareMethod, setShareMethod] = useState(LinkShareEnum);
  return (
    <>
      <ShareSettingsWrapper>
        <ShareSettingsTitle>Share Settings</ShareSettingsTitle>
        <ShareSegmentSelection
          setShareMethod={setShareMethod}
          shareMethod={shareMethod}
        />
      </ShareSettingsWrapper>
      <AnimatePresence initial={false}>
        {shareMethod === LinkShareEnum ? (
          <LinkShare link={link} />
        ) : (
          <QRShare link={link} title={title} background={background} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareSettings;
