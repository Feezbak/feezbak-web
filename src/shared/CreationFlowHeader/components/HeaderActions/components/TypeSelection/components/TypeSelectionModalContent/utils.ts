import imgTypeBtnRespSrc from "@images/image-type-btn-resp.webp";
import imgTypeBtnTextSrc from "@images/image-type-text-resp.webp";
import textTypeBtnRespSrc from "@images/text-type-btn-resp.webp";
import textTypeTextRespSrc from "@images/text-type-text-resp.webp";
import combinedSrc from "@images/combined-type.webp";
import { StoryTypeEnum } from "@/enums";

export const typesModalContent = [
  {
    sectionTitle: "Respond to Images",
    type1: {
      type: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      imgSrc: imgTypeBtnRespSrc,
      title: "By Choices",
      desc: "Users will have the chance to choose one of the responses.",
    },
    type2: {
      type: StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      imgSrc: imgTypeBtnTextSrc,
      title: "By Comments",
      desc: "Users will have the chance to reply with a short comment.",
    },
  },
  {
    sectionTitle: "Respond to Question",
    type1: {
      type: StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP,
      imgSrc: textTypeBtnRespSrc,
      title: "By Choices",
      desc: "Users will have the chance to choose one of the responses.",
    },
    type2: {
      type: StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP,
      imgSrc: textTypeTextRespSrc,
      title: "By Comments",
      desc: "Users will have the chance to reply with a short comment.",
    },
  },
  {
    sectionTitle: "Dynamic Image",
    type1: {
      type: StoryTypeEnum.COMBINED,
      imgSrc: combinedSrc,
      title: "Combined",
      desc: "User will have the chance to choose the response & add a short comment",
    },
  },
];
