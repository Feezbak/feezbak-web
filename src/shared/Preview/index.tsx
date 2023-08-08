import { lazy } from "react";

const FlowSelector = lazy(() => import("./components/FlowSelector"));

interface Props {
  isCreationMode?: boolean;
  storyData?: any;
}

const Preview = ({ isCreationMode = false, storyData }: Props) => {
  return <FlowSelector isCreationMode={isCreationMode} storyData={storyData} />;
};

export default Preview;
