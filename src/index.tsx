import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyleEnums } from "@/enums";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: StyleEnums.primary as string,
          borderRadius: StyleEnums.borderRadiusBase as number,
          colorError: StyleEnums.error as string,
          colorSuccess: StyleEnums.success as string,
          fontFamily: StyleEnums.fontFamily as string,
          colorTextBase: StyleEnums.black as string,
        },
        components: {
          Button: {
            controlHeight: StyleEnums.buttonBaseHeight as number,
            fontWeightStrong: 600,
          },
          Input: {
            paddingContentHorizontal:
              StyleEnums.inputPaddingHorizontal as number,
          },
          Dropdown: {
            paddingContentVertical: StyleEnums.dropdownPadding as number,
          },
          Form: {
            colorErrorBg: StyleEnums.error as string,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
