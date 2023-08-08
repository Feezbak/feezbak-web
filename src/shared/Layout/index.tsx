import { ReactNode } from "react";
import Helmet from "react-helmet";
import { opacityAnimation } from "@assets/framerAnimations";
import { LayoutWrapper, AnimateDiv } from "./styles";
import { StyleEnums } from "@/enums";

interface Props {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <LayoutWrapper justify="center" align="top">
      <Helmet
        bodyAttributes={{
          class: "body",
        }}
      >
        <meta name="theme-color" content={StyleEnums.primary as string} />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <AnimateDiv {...opacityAnimation}>{children}</AnimateDiv>
    </LayoutWrapper>
  );
};

export default Layout;
