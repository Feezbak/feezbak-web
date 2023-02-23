import { StyleEnums, StoryTypeEnum } from "@/enums";

export const storyDefaultState = {
  currentStep: 1,
  step1: {
    title: "<p></p>",
    background: StyleEnums.storyDefaultColor1 as string,
    titleColor: StyleEnums.black as string,
  },
  step2: {
    isMultiple: false,
    type: StoryTypeEnum.IMAGE_VOTING,
  },
};

export const storyEditorConvertedContent = {
  title: storyDefaultState.step1.title,
  titleColor: storyDefaultState.step1.titleColor,
};

export const responseBtnListDefaultState = [
  {
    id: "1",
    text: "I like this one",
  },
];
