import { useContext, useCallback } from "react";
import Editor from "./components/Editor";
import { AnanasOnBikeIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { storyDefaultState } from "@/constants";
import { notification, message } from "antd";
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

  const openNotification = useCallback(() => {
    api.open({
      message: "Noticed Some Changes",
      description:
        "You currently made some changes and We’re pretty sure that it looks way nicer now!",
      duration: 1,
      placement: "topRight",
      icon: <AnanasOnBikeIcon />,
    });
  }, [api]);

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
