import { ResponseTypeEnum, StoryTypeEnum, StyleEnums } from "@/enums";

export const responseBtnListDefaultState = [
  {
    id: "",
    text: "I like this one",
  },
];

export type Step2Type = {
  isMultiple: boolean;
  type: StoryTypeEnum;
  imageVoting: {
    isImageAttached: boolean;
    isSquare: boolean;
    selectedImgSrc: string;
    response: {
      responseType: ResponseTypeEnum;
      responseBtnList: typeof responseBtnListDefaultState;
    };
  };
};

export type Step1Type = {
  title: string;
  titleColor: string;
  background: string;
};

export type StoryCreationDataType = {
  currentStep: number;
  step1: Step1Type;
  step2: Step2Type;
  setNextStep: () => void;
  setPrevStep: () => void;
  setTitleData: (data: any) => void;
  setVotingType: (data: string) => void;
  setResponseType: (data: string) => void;
  setImageAttached: (data: boolean) => void;
  setSelectedImgSrc: (data: string) => void;
  setResponseButtons: (data: any) => void;
  setImageSquareState: (data: boolean) => void;
  setPreviewBackground: (data: string) => void;
  setSelectionQuantityState: (data: boolean) => void;
};

export const storyDefaultState: StoryCreationDataType = {
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
  setNextStep: () => {},
  setPrevStep: () => {},
  setTitleData: () => {},
  setVotingType: () => {},
  setResponseType: () => {},
  setImageAttached: () => {},
  setSelectedImgSrc: () => {},
  setResponseButtons: () => {},
  setImageSquareState: () => {},
  setPreviewBackground: () => {},
  setSelectionQuantityState: () => {},
};

export const storyEditorConvertedContent = {
  title: storyDefaultState.step1.title,
  titleColor: storyDefaultState.step1.titleColor,
};
