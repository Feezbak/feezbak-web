import { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { getContentNotificationConfig } from "@/constants";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { notification, message, NotificationArgsProps } from "antd";
import { AnanasOnBikeIcon } from "@/icons";
import useRequest from "@ahooksjs/use-request";
import { useParams, useNavigate } from "react-router-dom";
import { saveStoryFields } from "@/api";
import UserInfoCollect from "./components/UserInfoCollect";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { getErrorMessage } from "@helpers/errorMessage";
import { StoryProgressEnum } from "@/enums";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const { id: storyId } = useParams();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, setPrevStep, step3 } = useContext(StoryCreationContext);
  const apiConfig = getContentNotificationConfig(<AnanasOnBikeIcon />);
  const openNotification = () => api.open(apiConfig as NotificationArgsProps);

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
        message.error(getErrorMessage(error));
      },
    }
  );

  const handleGoToPrevStep = () => {
    setPrevStep();
  };

  const handleFinalize = () => {
    const stepInfoBody = {
      id: storyId,
      progress: StoryProgressEnum.STEP3,
      ...step3,
    };
    (() => runSaveStoryFields(stepInfoBody))();
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader handleDemo={handleDemo} currentStep={currentStep} />
      <UserInfoCollect />
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
