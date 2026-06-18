import { opacityAnimation } from "@assets/framerAnimations";
import CreatedBy from "@shared/CreatedBy";
import { StoryTypeEnum } from "@/enums";
import {
  LayerWrapper,
  LayerInfoContent,
  ActionsWrapper,
  SkipBtn,
  LearnBtn,
  ContextPill,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  handleSkip: () => void;
  imageCount?: number;
  storyType?: StoryTypeEnum;
}

const isImageType = (type?: StoryTypeEnum) =>
  type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
  type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP ||
  type === StoryTypeEnum.COMBINED;

const WelcomeLayer = ({
  handleLayer,
  handleSkip,
  imageCount,
  storyType,
}: Props) => {
  const hasImages = isImageType(storyType) && imageCount && imageCount > 0;
  const contextLabel = hasImages
    ? `${imageCount} image${imageCount > 1 ? "s" : ""} · ~1 min`
    : "~1 min";

  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <ContextPill>{contextLabel}</ContextPill>
        <h2>Welcome to Feezbak 👋🏻</h2>
        <p>
          We're thrilled to have you here and we greatly value your feedback.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <LearnBtn onClick={handleLayer} size="large" ghost={true}>
          Learn About Feezbak
        </LearnBtn>
        <SkipBtn onClick={handleSkip} size="large">
          Give Feedback
        </SkipBtn>
      </ActionsWrapper>
      <CreatedBy margins="1rem 0 0 0" />
    </LayerWrapper>
  );
};

export default WelcomeLayer;
