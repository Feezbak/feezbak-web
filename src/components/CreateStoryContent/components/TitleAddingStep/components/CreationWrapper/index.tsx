import { useContext } from "react";
import Editor from "./components/Editor";
import { AnanasOnBikeIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { getContentNotificationConfig, storyDefaultState } from "@/constants";
import { notification, message, NotificationArgsProps } from "antd";
import { saveStoryFields } from "@/api";
import { useParams } from "react-router-dom";
import { useTextFromHTML } from "@/hooks";
import useRequest from "@ahooksjs/use-request";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const { id: storyId } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, step1, setNextStep } = useContext(StoryCreationContext);
  const titleText = useTextFromHTML(step1.title);
  const apiConfig = getContentNotificationConfig(<AnanasOnBikeIcon />);
  const openNotification = () => api.open(apiConfig as NotificationArgsProps);

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
      onError: async (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  const handleSubmitStep = () => {
    const storageStepsData = localStorage.getItem(storyId!);
    const parsedData = JSON.parse(storageStepsData!);
    const stepInfoBody = {
      id: storyId,
      progress: parsedData?.step3
        ? "step3"
        : parsedData?.step2
        ? "step2"
        : "step1",
      ...step1,
      titleText,
    };
    (() => runSaveStoryFields(stepInfoBody))();
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader handleDemo={handleDemo} />
      <Editor />
      <CreationFlowFooter
        nextLoading={isLoading}
        currentStep={currentStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={step1.title !== storyDefaultState.step1.title}
        toolTipTitle="Please provide title text, to be able go to next step!"
      />
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
