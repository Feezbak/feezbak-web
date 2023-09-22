import { StoryTypeEnum, StyleEnums, LinkShareEnum } from "@/enums";

export const responseBtnListDefaultState = [
  {
    id: "",
    text: "I like this one",
  },
];

export type ResponseBtnsType = {
  id: string;
  text: string;
}[];

export type Image = {
  id: string;
  src: string;
};

export type UserInfoFieldType = {
  value: string;
  label: string;
};

export type Step2Type = {
  isMultiple: boolean;
  type: StoryTypeEnum;
  imageVoting: {
    isImageAttached: boolean;
    isSquare: boolean;
    selectedImgSrc: string;
    images: Image[];
  };
  response: {
    responseBtnList: ResponseBtnsType;
  };
};

export type Step3Type = {
  shareType: string;
  isInfoCollectionAllowed: boolean;
  userInfoFields: UserInfoFieldType[];
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
  step3: Step3Type;
  setNextStep: () => void;
  setPrevStep: () => void;
  setStep1: (data: Step1Type) => void;
  setStep2: (data: Step2Type) => void;
  setStep3: (data: Step3Type) => void;
  setTitleData: (data: any) => void;
  setVotingType: (data: string) => void;
  setImageAttached: (data: boolean) => void;
  setNewImage: (data: Image) => void;
  setInfoCollection: (data: boolean) => void;
  setInfoCollectionFields: (data: any) => void;
  setShareMethod: (data: string) => void;
  setSelectedImgSrc: (data: string) => void;
  setResponseButtons: (data: any) => void;
  setImageSquareState: (data: boolean) => void;
  setPreviewBackground: (data: string) => void;
  setSelectionQuantityState: (data: boolean) => void;
  deleteImage: (data: string) => void;
  setCurrentStep: (data: number) => void;
};

export const storyDefaultState: StoryCreationDataType = {
  currentStep: 0,
  step1: {
    title: "<p></p>",
    background: StyleEnums.storyDefaultColor1 as string,
    titleColor: StyleEnums.black as string,
  },
  step2: {
    isMultiple: false,
    type: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
    imageVoting: {
      isImageAttached: false,
      isSquare: false,
      selectedImgSrc: "",
      images: [],
    },
    response: {
      responseBtnList: [...responseBtnListDefaultState],
    },
  },
  step3: {
    shareType: LinkShareEnum,
    isInfoCollectionAllowed: false,
    userInfoFields: [
      {
        value: "First Name",
        label: "First Name",
      },
      {
        value: "Last Name",
        label: "Last Name",
      },
      {
        value: "Email Address",
        label: "Email Address",
      },
      {
        value: "Phone",
        label: "Phone",
      },
    ],
  },
  setCurrentStep: () => {},
  setNextStep: () => {},
  setStep1: () => {},
  setStep2: () => {},
  setStep3: () => {},
  deleteImage: () => {},
  setPrevStep: () => {},
  setTitleData: () => {},
  setVotingType: () => {},
  setImageAttached: () => {},
  setShareMethod: () => {},
  setNewImage: () => {},
  setInfoCollection: () => {},
  setInfoCollectionFields: () => {},
  setSelectedImgSrc: () => {},
  setResponseButtons: () => {},
  setImageSquareState: () => {},
  setPreviewBackground: () => {},
  setSelectionQuantityState: () => {},
};

export type userDataType = {
  accountVerificationCode: undefined | string;
  changePasswordId: undefined | string;
  createdAt: undefined | string;
  email: undefined | string;
  firstName: undefined | string;
  lastName: undefined | string;
  profession: undefined | string;
  stories: undefined | string[];
  updatedAt: undefined | string;
  verified: undefined | boolean;
  __v: undefined | number;
  _id: undefined | string;
};

export const userDefaultData: userDataType = {
  accountVerificationCode: undefined,
  changePasswordId: undefined,
  createdAt: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  profession: undefined,
  stories: undefined,
  updatedAt: undefined,
  verified: undefined,
  __v: undefined,
  _id: undefined,
};

export const storyEditorConvertedContent = {
  title: storyDefaultState.step1.title,
  titleColor: storyDefaultState.step1.titleColor,
};

export type ResponseBtnAnalyticsType = {
  votesCount?: number;
  text: string;
  id: string;
};

export type UserCommentsType = {
  _id: string;
  createdAt: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  commentText: string;
};

export type ImageResponsesType = {
  id: string;
  src: string;
  totalCommentCount?: number;
  buttons?: ResponseBtnAnalyticsType[];
  comments?: UserCommentsType[];
};

export type CommentResponsesType = {};
