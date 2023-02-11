import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { antdStyles } from "@/constants";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider theme={antdStyles}>
    <App />
  </ConfigProvider>
);

reportWebVitals();
