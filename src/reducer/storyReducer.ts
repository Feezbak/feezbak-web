import { Image, storyStateActions } from "@/constants";

const storyReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case storyStateActions.SET_NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case storyStateActions.SET_PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case storyStateActions.SET_TITLE_DATA:
      return {
        ...state,
        step1: {
          ...state.step1,
          ...payload,
        },
      };
    case storyStateActions.SET_RESPONSE_BUTTONS:
      return {
        ...state,
        step2: {
          ...state.step2,
          response: {
            ...state.step2.imageVoting.response,
            responseBtnList: payload,
          },
        },
      };
    case storyStateActions.SET_IMAGE_ATTACHMENT_TYPE:
      return {
        ...state,
        step2: {
          ...state.step2,
          imageVoting: {
            ...state.step2.imageVoting,
            isImageAttached: payload,
          },
        },
      };
    case storyStateActions.SET_SELECTED_IMAGE_SRC:
      return {
        ...state,
        step2: {
          ...state.step2,
          imageVoting: {
            ...state.step2.imageVoting,
            selectedImgSrc: payload,
          },
        },
      };
    case storyStateActions.SET_MULTIPLE_SELECTION_STATE:
      return {
        ...state,
        step2: {
          ...state.step2,
          isMultiple: payload,
        },
      };
    case storyStateActions.SET_VOTING_TYPE:
      return {
        ...state,
        step2: {
          ...state.step2,
          type: payload,
          imageVoting: {
            ...state.step2.imageVoting,
            isImageAttached: false,
            selectedImgSrc: "",
          },
        },
      };
    case storyStateActions.SET_PREVIEW_BACKGROUND:
      return {
        ...state,
        step1: {
          ...state.step1,
          background: payload,
        },
      };
    case storyStateActions.SET_IMAGE_SQUARE_STATE:
      return {
        ...state,
        step2: {
          ...state.step2,
          imageVoting: {
            ...state.step2.imageVoting,
            isSquare: payload,
          },
        },
      };
    case storyStateActions.SET_NEW_IMAGE:
      return {
        ...state,
        step2: {
          ...state.step2,
          imageVoting: {
            ...state.step2.imageVoting,
            images: [payload, ...state.step2.imageVoting.images],
          },
        },
      };
    case storyStateActions.DELETE_IMAGE:
      return {
        ...state,
        step2: {
          ...state.step2,
          imageVoting: {
            ...state.step2.imageVoting,
            images: state.step2.imageVoting.images.filter(
              (image: Image) => image.id !== payload
            ),
          },
        },
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default storyReducer;
