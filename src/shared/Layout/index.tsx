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

    const sleek = (window as any)?.$sleek;
    if (sleek && typeof sleek.hideButton === "function") {
      if (pageTitle === PageTitleEnums.DASHBOARD) {
        sleek.showButton();
      } else {
        sleek.hideButton();
      }
    } else {
      if (pageTitle === PageTitleEnums.DASHBOARD) {
        const script = document.createElement("script");

        // Set attributes for the script tag
        script.type = "text/javascript";

        // Add your JavaScript code inside the script tag
        script.innerHTML = `
     window.$sleek=[];window.SLEEK_PRODUCT_ID=${process.env.SLEEK_PRODUCT_ID};(function(){d=document;s=d.createElement("script");s.src="https://client.sleekplan.com/sdk/e.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    `;

        // Append the script tag to the body
        document.body.appendChild(script);

        return () => {
          // Clean up the script tag when the component unmounts
          document.body.removeChild(script);
        };
      }
    }
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
