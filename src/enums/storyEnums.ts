export enum StoryEnums {
  DRAFT = "draft",
  SUBMITTED = "submitted",
}

export enum StoryStepEnum {
  TITLE_STEP = 1,
  TYPE_STEP = 2,
}

export enum StoryTypeEnum {
  IMAGE_VOTING_ONLY_BUTTON_RESP = "Image voting with button response",
  IMAGE_VOTING_ONLY_TEXT_RESP = "Image voting with text response",
  TEXT_VOTING_ONLY_BUTTON_RESP = "Text voting with button response",
  TEXT_VOTING_ONLY_TEXT_RESP = "Text voting with text response",
  COMBINED = "Combined",
}

export enum ResponseTypeEnum {
  BUTTON_RESPONSE = "Button Response",
  TEXT_RESPONSE = "Text Response",
  COMBINED = "Combined",
}
