import React, { ReactNode } from "react";
import { LayoutWrapper } from "./styles";
import Helmet from "react-helmet";

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
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
