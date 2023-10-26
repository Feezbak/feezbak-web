import { ReactNode, useEffect } from "react";
import Helmet from "react-helmet";
import { opacityAnimation } from "@assets/framerAnimations";
import { LayoutWrapper, AnimateDiv } from "./styles";
import { PageTitleEnums, StyleEnums } from "@/enums";

interface Props {
  pageTitle: PageTitleEnums;
  children: ReactNode;
  isAnimated?: boolean;
}

const Layout = ({ pageTitle, children, isAnimated = true }: Props) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <LayoutWrapper justify="center" align="top">
      <Helmet
        bodyAttributes={{
          class: "body",
        }}
      >
        <meta name="theme-color" content={StyleEnums.primary as string} />
        <meta charSet="utf-8" />
      </Helmet>
      <AnimateDiv {...(isAnimated ? { ...opacityAnimation } : undefined)}>
        {children}
      </AnimateDiv>
    </LayoutWrapper>
  );
};

export default Layout;
