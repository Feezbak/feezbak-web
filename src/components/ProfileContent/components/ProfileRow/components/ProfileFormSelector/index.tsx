import React from "react";
import Icon from "@ant-design/icons";
import { userProfileTabs } from "@/constants";
import { SelectorWrapper, SelectorContainer, SelectionItem } from "./styles";

interface Props {
  active: number;
  setActive: (key: number) => void;
}

const ProfileFormSelector = ({ active, setActive }: Props) => {
  return (
    <SelectorWrapper xs={20} sm={20} md={20} lg={4} xl={4} xxl={4}>
      <SelectorContainer>
        {userProfileTabs.map((item) => (
          <SelectionItem
            $isActive={item.key === active}
            key={item.key}
            onClick={() => setActive(item.key)}
          >
            <Icon component={item.icon} />
            {item.title}
          </SelectionItem>
        ))}
      </SelectorContainer>
    </SelectorWrapper>
  );
};

export default ProfileFormSelector;
