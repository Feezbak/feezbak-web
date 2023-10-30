import { useRef } from "react";
import QRCode from "react-qr-code";
import { opacityAnimation } from "@assets/framerAnimations";
import { StyleEnums } from "@/enums";
import html2canvas from "html2canvas";
import QRtemplate from "./components/QRtemplate";
import { QRShareWrapper, ExportWrapper, ExportPNGButton } from "./styles";

interface Props {
  link: string;
  title: string;
  background: string;
}

const QRShare = ({ link, title, background }: Props) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleExportClick = () => {
    if (componentRef?.current) {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px"; // Move it off-screen
      document.body.appendChild(container);
      componentRef.current.style.display = "flex";
      container.appendChild(componentRef.current);

      html2canvas(componentRef.current).then((canvas) => {
        // You can now work with the canvas to convert it to a PNG image or perform other actions.
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "qr_template.png";
        a.click();

        document.body.removeChild(container);
      });
    }
  };

  return (
    <QRShareWrapper {...opacityAnimation}>
      <QRCode value={link} size={350} fgColor={StyleEnums.primary as string} />
      <ExportWrapper ref={componentRef}>
        <QRtemplate title={title} background={background}>
          <QRCode
            value={link}
            size={180}
            fgColor={StyleEnums.black as string}
          />
        </QRtemplate>
      </ExportWrapper>
      <ExportPNGButton type="default" onClick={handleExportClick}>
        Export as PNG
      </ExportPNGButton>
    </QRShareWrapper>
  );
};

export default QRShare;
