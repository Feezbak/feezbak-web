import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import { opacityAnimation } from "@assets/framerAnimations";
import { LayoutWrapper, AnimateDiv } from "./styles";

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
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <AnimateDiv {...opacityAnimation}>{children}</AnimateDiv>
    </LayoutWrapper>
  );
};

export default Layout;
