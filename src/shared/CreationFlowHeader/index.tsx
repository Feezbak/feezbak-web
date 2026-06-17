import { GoBackRoundIcon, MobileDeviseIcon } from "@/icons";
import HeaderActions from "./components/HeaderActions";
import { StoryTypeEnum } from "@/enums";
import { useResponsive } from "@/hooks";
import {
  CreationFlowHeaderWrapper,
  GoBackContentWrapper,
  StepProgressWrapper,
  StepDot,
  StepLabel,
  DemoBtn,
  BackBtn,
} from "./styles";

export interface ActionsList {
  quantitySelection: boolean;
  typeSelection: boolean;
}

const TOTAL_STEPS = 3;
const STEP_LABELS = ["Title", "Type", "Settings"];

interface Props {
  actions?: ActionsList;
  currentStep?: number;
  handleQuantitySelection?: (value: boolean) => void;
  quantitySelectionDefaultValue?: boolean;
  handleTypeSelection?: (value: StoryTypeEnum) => void;
  typeSelectionDefaultValue?: StoryTypeEnum;
  handleDemo?: () => void;
}

const CreationFlowHeader = ({
  actions,
  currentStep,
  handleDemo,
  handleQuantitySelection,
  handleTypeSelection,
  typeSelectionDefaultValue,
  quantitySelectionDefaultValue,
}: Props) => {
  const { isMobile } = useResponsive();
  return (
    <CreationFlowHeaderWrapper>
      <GoBackContentWrapper>
        <BackBtn icon={<GoBackRoundIcon />} type="link" href="/dashboard" />
        <h3>Creating Story</h3>

        {isMobile && (
          <DemoBtn
            type="primary"
            onClick={handleDemo}
            icon={<MobileDeviseIcon />}
          />
        )}
      </GoBackContentWrapper>

      {currentStep && (
        <StepProgressWrapper>
          {Array.from({ length: TOTAL_STEPS }, (_, i) => {
            const step = i + 1;
            const isCompleted = step < currentStep;
            const isActive = step === currentStep;
            return (
              <StepDot
                key={step}
                $isActive={isActive}
                $isCompleted={isCompleted}
                title={STEP_LABELS[i]}
              />
            );
          })}
          <StepLabel>
            Step {currentStep} of {TOTAL_STEPS} — {STEP_LABELS[currentStep - 1]}
          </StepLabel>
        </StepProgressWrapper>
      )}

      {!!actions && (
        <HeaderActions
          actions={actions}
          handleQuantitySelection={handleQuantitySelection}
          handleTypeSelection={handleTypeSelection}
          typeSelectionDefaultValue={typeSelectionDefaultValue}
          quantitySelectionDefaultValue={quantitySelectionDefaultValue}
        />
      )}
    </CreationFlowHeaderWrapper>
  );
};

export default CreationFlowHeader;
