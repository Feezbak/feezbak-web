import { ReactNode } from "react";
import { ProductLogoWhite } from "@/icons";
import { TemplateWrapper, Title, QRcontainer, PoweredBy } from "./styles";

interface Props {
  backgound: string;
  title: string;
  children: ReactNode;
}

const QRtemplate = ({ backgound, title, children }: Props) => {
  return (
    <TemplateWrapper $background={backgound}>
      <Title>{title}</Title>
      <QRcontainer>{children}</QRcontainer>
      <PoweredBy>
        <p>POWERED BY</p>
        <ProductLogoWhite />
      </PoweredBy>
    </TemplateWrapper>
  );
};

export default QRtemplate;
