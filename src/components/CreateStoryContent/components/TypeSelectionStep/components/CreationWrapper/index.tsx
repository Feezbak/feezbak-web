import { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { StoryTypeEnum } from "@/enums";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import TypeSelectionModalContent from "@shared/CreationFlowHeader/components/HeaderActions/components/TypeSelection/components/TypeSelectionModalContent";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const { currentStep, step2, setVotingType, setNextStep, setPrevStep } =
    useContext(StoryCreationContext);

  const handleTypeChange = (type: StoryTypeEnum) => {
    setVotingType(type);
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader handleDemo={handleDemo} currentStep={currentStep} />
      <TypeSelectionModalContent
        onChange={handleTypeChange}
        defaultValue={step2.type}
        setTypeModalState={() => {}}
      />
      <CreationFlowFooter
        prevBtnActionHandler={setPrevStep}
        nextBtnActionHandler={setNextStep}
        isNextActive={true}
        currentStep={currentStep}
        toolTipTitle=""
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
