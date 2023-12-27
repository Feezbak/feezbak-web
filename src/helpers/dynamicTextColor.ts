import { StyleEnums } from "@/enums";

export const dynamicTextColor = (colorHex: string) => {
  const calculateBrightness = (background: string) => {
    const hex = background.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const isDarkBackground = calculateBrightness(colorHex) < 128;

  return {
    color: isDarkBackground ? StyleEnums.white : StyleEnums.black,
    isDark: !isDarkBackground,
  };
};
