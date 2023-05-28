import React from "react";
import { SelectorWrapper, SelectorContainer, SelectionItem } from "./styles";

interface Props {
  active: number;
  setActive: (key: number) => void;
}

const ProfileFormSelector = ({ active, setActive }: Props) => {
  return (
    <SelectorWrapper>
      <SelectorContainer>
        {[0, 1].map((item) => (
          <SelectionItem $isActive={item === active} key={item}></SelectionItem>
        ))}
      </SelectorContainer>
    </SelectorWrapper>
  );
};

export default ProfileFormSelector;
