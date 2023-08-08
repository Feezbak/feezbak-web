import PreviewCreation from "../PreviewCreation";
import FeedbackView from "../FeedbackView";

interface Props {
  isCreationMode: boolean;
  storyData?: any;
}

const FlowSelector = ({ isCreationMode, storyData }: Props) => {
  return isCreationMode ? (
    <PreviewCreation />
  ) : (
    <FeedbackView storyData={storyData} />
  );
};

export default FlowSelector;
