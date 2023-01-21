import { StyleEnums } from "./src/enums";
const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": StyleEnums.primary,
          "@secondary-color": StyleEnums.secondary,
          "@border-radius-base": StyleEnums.borderRadiusBase,
          "@input-padding-horizontal": StyleEnums.inputPaddingHorizontal,
          "@input-padding-vertical-lg": StyleEnums.inputPaddingVertical,
          "@btn-height-base": StyleEnums.buttonBaseHeight,
          "@dropdown-vertical-padding": StyleEnums.dropdownPadding,
          "@font-family": "Epilogue",
          "@btn-font-weight": "600",
          "@error-color": StyleEnums.error,
          "@form-error-input-bg": StyleEnums.error,
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.path.json",
      },
    },
  ],
};
