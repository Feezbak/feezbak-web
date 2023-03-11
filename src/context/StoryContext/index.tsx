import { createContext, ReactNode, useReducer } from "react";
import { storyReducer } from "@/reducer";
import {
  storyDefaultState as initialState,
  storyStateActions,
} from "@/constants";

export const StoryCreationContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

export const StoryProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(storyReducer, initialState);

  const setNextStep = () => {
    dispatch({ type: storyStateActions.SET_NEXT_STEP });
  };

  const setPrevStep = () => {
    dispatch({ type: storyStateActions.SET_PREV_STEP });
  };

  const setTitleData = (payload: any) => {
    dispatch({ type: storyStateActions.SET_TITLE_DATA, payload });
  };

  const setResponseButtons = (payload: any) => {
    dispatch({ type: storyStateActions.SET_RESPONSE_BUTTONS, payload });
  };

  const setResponseType = (payload: any) => {
    dispatch({ type: storyStateActions.SET_RESPONSE_TYPE, payload });
  };

  const setImageAttached = (payload: boolean) => {
    dispatch({ type: storyStateActions.SET_IMAGE_ATTACHMENT_TYPE, payload });
  };

  const setSelectedImgSrc = (payload: string) => {
    dispatch({ type: storyStateActions.SET_SELECTED_IMAGE_SRC, payload });
  };

  const setSelectionQuantityState = (payload: boolean) => {
    dispatch({ type: storyStateActions.SET_MULTIPLE_SELECTION_STATE, payload });
  };

  const setVotingType = (payload: string) => {
    dispatch({ type: storyStateActions.SET_VOTING_TYPE, payload });
  };

  const setPreviewBackground = (payload: string) => {
    dispatch({ type: storyStateActions.SET_PREVIEW_BACKGROUND, payload });
  };

  const setImageSquareState = (payload: boolean) => {
    dispatch({ type: storyStateActions.SET_IMAGE_SQUARE_STATE, payload });
  };

  const value = {
    ...state,
    setNextStep,
    setPrevStep,
    setTitleData,
    setVotingType,
    setResponseType,
    setImageAttached,
    setSelectedImgSrc,
    setResponseButtons,
    setImageSquareState,
    setPreviewBackground,
    setSelectionQuantityState,
  };

  return (
    <StoryCreationContext.Provider value={value}>
      {children}
    </StoryCreationContext.Provider>
  );
};
