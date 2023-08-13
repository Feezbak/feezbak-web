import { StoryTypeEnum, StoryStepEnum, ClientLayerEnums } from "@/enums";
import { ResponseBtnsType, Image, UserInfoFieldType } from "@/constants";

export interface DemoProps {
  color: string;
  title: string;
  titleColor: string;
  type: StoryTypeEnum;
  isSquare: boolean;
  isHovered?: boolean;
  isMultiple?: boolean;
  coverImgSrc: string;
  isColorPickerOpen?: boolean;
  squareBtnHandler?: (state: boolean) => void;
  colorPickerBtnHandler?: () => void;
  flowMouseLeave?: (state: boolean) => void;
  flowMouseEnter?: (state: boolean) => void;
  colorPickerOnChange?: (color: string) => void;
  images: Image[];
  responseButtons: ResponseBtnsType;
  userInfoFields: UserInfoFieldType[];
  isCreationMode: boolean;
  isInfoCollectionAllowed?: boolean;
  currentStep?: StoryStepEnum;
  handleCompleteFeedback?: (layer: ClientLayerEnums) => void;
}

export interface ContactToData {
  field: string;
  value: string;
}

export interface Feedback {
  id: string;
  type: StoryTypeEnum;
  isComplete: boolean;
  isMultiple: boolean;
  contactToData?: ContactToData[];
  responses: {
    msg: string;
    imageId?: string;
    respBtnId?: string;
  }[];
}
