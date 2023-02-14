import { StyleEnums } from "@/enums";

export const storyDefaultState = {
  step1: {
    title: "<p></p>",
    background: StyleEnums.storyDefaultColor1 as string,
    titleColor: StyleEnums.black as string,
  },
};

export const storyEditorConvertedContent = {
  title: storyDefaultState.step1.title,
  titleColor: storyDefaultState.step1.titleColor,
};
