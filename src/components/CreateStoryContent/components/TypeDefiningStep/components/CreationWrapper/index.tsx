import { useContext, useMemo } from "react";
import { StoryTypeEnum, StoryProgressEnum } from "@/enums";
import { StoryCreationContext } from "@/context";
import ImageType from "./components/ImageType";
import TextType from "./components/TextType";
import Response from "./components/Response";
import { AnimatePresence } from "framer-motion";
import { notification, message, NotificationArgsProps } from "antd";
import { getContentNotificationConfig } from "@/constants";
import { AnanasOnBikeIcon } from "@/icons";
import useRequest from "@ahooksjs/use-request";
import { saveStoryFields } from "@/api";
import { useParams } from "react-router-dom";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { getErrorMessage } from "@helpers/errorMessage";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const { id: storyId } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const apiConfig = getContentNotificationConfig(<AnanasOnBikeIcon />);
  const openNotification = () => api.open(apiConfig as NotificationArgsProps);
  const {
    currentStep,
    step2,
    step1,
    setNextStep,
    setPrevStep,
    setSelectionQuantityState,
  } = useContext(StoryCreationContext);

  const { run: runSaveStoryFields, loading: isLoading } = useRequest(
    (payload) => saveStoryFields(payload),
    {
      manual: true,
      onSuccess: (resp) => {
        if (resp?.data) {
          openNotification();
          setTimeout(() => setNextStep(), 1000);
        }
      },
      onError: (error: any) => {
        message.error(getErrorMessage(error));
      },
    }
  );

  const handleSubmitStep = () => {
    const storageStepsData = localStorage.getItem(storyId!);
    const parsedData = JSON.parse(storageStepsData!);
    const stepInfoBody = {
      id: storyId,
      progress: parsedData?.step3
        ? StoryProgressEnum.STEP3
        : StoryProgressEnum.STEP2,
      ...step1,
      ...step2,
    };
    (() => runSaveStoryFields(stepInfoBody))();
  };

  const handleGoToPrevStep = () => {
    setPrevStep();
  };

  const handleQuantitySelection = (value: boolean) => {
    setSelectionQuantityState(value);
  };

  const isImageVoting = useMemo(
    () =>
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP ||
      step2.type === StoryTypeEnum.COMBINED,
    [step2]
  );

  const isBtnResponse = useMemo(
    () =>
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.COMBINED,
    [step2]
  );

  const isNextActive = useMemo(() => {
    if (
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP
    ) {
      return true;
    } else if (
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP ||
      step2.type === StoryTypeEnum.COMBINED
    ) {
      return !!step2.imageVoting.images.length;
    }
    return false;
  }, [step2]);

  return (
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader
        handleDemo={handleDemo}
        currentStep={currentStep}
        actions={{ quantitySelection: isImageVoting, typeSelection: false }}
        quantitySelectionDefaultValue={step2.isMultiple}
        handleQuantitySelection={handleQuantitySelection}
      />
      <AnimatePresence initial={false} exitBeforeEnter>
        {isImageVoting ? <ImageType key="image" /> : <TextType key="text" />}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isBtnResponse && <Response key="response" />}
      </AnimatePresence>
      <CreationFlowFooter
        nextLoading={isLoading}
        prevBtnActionHandler={handleGoToPrevStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={isNextActive}
        currentStep={currentStep}
        toolTipTitle="Please select type for your feedback"
      />
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
