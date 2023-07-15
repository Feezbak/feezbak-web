import { StoryTypeEnum, StoryStepEnum } from "@/enums";
import { ResponseBtnsType, Image, UserInfoFieldType } from "@/constants";

export interface DemoProps {
  color: string;
  title: string;
  titleColor: string;
  type: StoryTypeEnum;
  isSquare: boolean;
  isHovered?: boolean;
  coverImgSrc: string;
  isColorPickerOpen?: boolean;
  squareBtnHandler?: () => void;
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
}
