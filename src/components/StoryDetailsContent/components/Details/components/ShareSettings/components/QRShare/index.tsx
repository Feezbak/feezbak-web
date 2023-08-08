import QRCode from "react-qr-code";
import { opacityAnimation } from "@assets/framerAnimations";
import { QRShareWrapper } from "./styles";
import { StyleEnums } from "@/enums";

interface Props {
  link: string;
}

const QRShare = ({ link }: Props) => {
  return (
    <QRShareWrapper {...opacityAnimation}>
      <QRCode value={link} size={250} fgColor={StyleEnums.primary as string} />
    </QRShareWrapper>
  );
};

export default QRShare;
