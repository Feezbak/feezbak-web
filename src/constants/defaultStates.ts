import { StyleEnums, StoryTypeEnum, ResponseTypeEnum } from "@/enums";

export const responseBtnListDefaultState = [
  {
    id: "",
    text: "I like this one",
  },
];

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
    imageVoting: {
      isImageAttached: false,
      isSquare: false,
      selectedImgSrc: "",
      response: {
        responseType: ResponseTypeEnum.BUTTON_RESPONSE,
        responseBtnList: [...responseBtnListDefaultState],
      },
    },
  },
};

export const storyEditorConvertedContent = {
  title: storyDefaultState.step1.title,
  titleColor: storyDefaultState.step1.titleColor,
};
