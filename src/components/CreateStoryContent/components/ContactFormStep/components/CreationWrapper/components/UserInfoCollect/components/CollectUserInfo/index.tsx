import { useContext } from "react";
import { Switch } from "antd";
import { StoryCreationContext } from "@/context";
import InfoCollectionFormItems from "./components/InfoCollectionFormItems";
import { AnimatePresence } from "framer-motion";
import {
  UserDataCollectWrapper,
  DataCollectionWrapper,
  InfoWrapper,
  InfoTitle,
  InfoDesc,
} from "./styles";

const CollectUserInfo = () => {
  const { step3, setInfoCollection } = useContext(StoryCreationContext);

  const onChange = (checked: boolean) => {
    setInfoCollection(checked);
  };

  return (
    <DataCollectionWrapper>
      <UserDataCollectWrapper>
        <InfoWrapper>
          <InfoTitle>Collect information</InfoTitle>
          <InfoDesc>
            If you turn this on you will be able to ask your friend for their
            contacts before filling the form.
          </InfoDesc>
        </InfoWrapper>
        <Switch
          onChange={onChange}
          defaultChecked={step3.isInfoCollectionAllowed}
        />
      </UserDataCollectWrapper>
      <AnimatePresence initial={false}>
        {step3.isInfoCollectionAllowed && <InfoCollectionFormItems />}
      </AnimatePresence>
    </DataCollectionWrapper>
  );
};

export default CollectUserInfo;
