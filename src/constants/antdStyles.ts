import { StyleEnums } from "@/enums";

export const antdStyles = {
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
      paddingInlineLG: StyleEnums.paddingInlineLG as number,
      contentFontSizeLG: StyleEnums.contentFontSizeLG as number,
      defaultGhostBorderColor: StyleEnums.gray3 as string,
      defaultGhostColor: StyleEnums.black as string,
      ghostBg: StyleEnums.white as string,
      defaultBg: StyleEnums.defaultButtonColor as string,
      defaultColor: StyleEnums.white as string,
      controlHeightLG: StyleEnums.buttonBaseHeightLG as number,
      fontWeight: StyleEnums.fontWeightStrong as number,
    },
    Input: {
      paddingContentHorizontal: StyleEnums.inputPaddingHorizontal as number,
    },
    Dropdown: {
      paddingContentVertical: StyleEnums.dropdownPadding as number,
    },
    Form: {
      colorErrorBg: StyleEnums.error as string,
    },
  },
};
