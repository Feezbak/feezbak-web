import React, { ReactNode } from "react";
import Helmet from "react-helmet";

interface Props {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "body",
        }}
      >
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
