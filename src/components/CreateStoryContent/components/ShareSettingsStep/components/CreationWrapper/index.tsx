import React, { useContext, useCallback } from "react";
import { StoryCreationContext } from "@/context";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { notification, message } from "antd";
import { AnanasOnBikeIcon } from "@/icons";
import useRequest from "@ahooksjs/use-request";
import { useParams, useNavigate } from "react-router-dom";
import { saveStoryFields } from "@/api";
import FeedbackShareAndGetSettings from "./components/FeedbackShareAndGetSettings";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const { id: storyId } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, setPrevStep, step3 } = useContext(StoryCreationContext);

  const openNotification = useCallback(() => {
    api.open({
      message: "Noticed Some Changes",
      description:
        "You currently made some changes and We’re pretty sure that it looks way nicer now!",
      duration: 1,
      placement: "topRight",
      className: "notification-custom-styles",
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
          localStorage.removeItem(storyId!);
          setTimeout(() => navigate(`/story-details/${storyId}`), 1000);
        }
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  const handleGoToPrevStep = () => {
    setPrevStep();
  };

  const handleFinalize = () => {
    runSaveStoryFields({ id: storyId, progress: "step3", ...step3 });
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader handleDemo={handleDemo} />
      <FeedbackShareAndGetSettings />
      <CreationFlowFooter
        nextLoading={isLoading}
        prevBtnActionHandler={handleGoToPrevStep}
        nextBtnActionHandler={handleFinalize}
        isNextActive={false}
        isLastStep={true}
        currentStep={currentStep}
        toolTipTitle="Great job!, let's get our Feedback"
      />
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
