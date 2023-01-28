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
      controlHeight: StyleEnums.buttonBaseHeight as number,
      fontWeightStrong: StyleEnums.fontWeightStrong as number,
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
