export const dynamicFontSizeHelpers = (
  baseFontSize: number,
  maxLength: number,
  text: string,
  measurement: string
): string => {
  const length = text.length;
  const percentage = (length / maxLength) * 100;
  const fontSize = baseFontSize - percentage * 0.1;

  if (measurement === "px") {
    return `${fontSize}`;
  } else if (measurement === "rem") {
    return `${fontSize / 16}`;
  } else {
    return "";
  }
};
