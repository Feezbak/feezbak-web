import { ReactNode } from "react";
import { ProductLogoWhite, ProductLogoBlack } from "@/icons";
import { dynamicTextColor } from "@helpers/dynamicTextColor";
import { TemplateWrapper, Title, QRcontainer, PoweredBy } from "./styles";

interface Props {
  background: string;
  title: string;
  children: ReactNode;
}

const QRtemplate = ({ background, title, children }: Props) => {
  const textColor = dynamicTextColor(background).color;

  return (
    <TemplateWrapper $background={background}>
      <Title $color={textColor}>{title}</Title>
      <QRcontainer>{children}</QRcontainer>
      <PoweredBy $color={textColor}>
        <p>POWERED BY</p>
        {dynamicTextColor(background).isDark ? (
          <ProductLogoBlack />
        ) : (
          <ProductLogoWhite />
        )}
      </PoweredBy>
    </TemplateWrapper>
  );
};

export default QRtemplate;
