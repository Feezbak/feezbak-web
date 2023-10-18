import { ActionsList } from "../../";
import { StoryTypeEnum } from "@/enums";
import MultipleSelection from "./components/MultipleSelection";
import TypeSelection from "./components/TypeSelection";
import { HeaderActionsWrapper, SpaceWrapper } from "./styles";

interface Props {
  actions: ActionsList;
  handleQuantitySelection?: (value: boolean) => void;
  quantitySelectionDefaultValue?: boolean;
  handleTypeSelection?: (value: StoryTypeEnum) => void;
  typeSelectionDefaultValue?: StoryTypeEnum;
}

const HeaderActions = ({
  actions,
  handleQuantitySelection,
  handleTypeSelection,
  typeSelectionDefaultValue,
  quantitySelectionDefaultValue,
}: Props) => {
  return (
    <HeaderActionsWrapper>
      <SpaceWrapper wrap>
        {actions.typeSelection &&
          handleTypeSelection &&
          typeSelectionDefaultValue && (
            <TypeSelection
              onChange={handleTypeSelection}
              defaultValue={typeSelectionDefaultValue}
            />
          )}
        {actions.quantitySelection && handleQuantitySelection && (
          <MultipleSelection
            defaultValue={!!quantitySelectionDefaultValue}
            onChange={handleQuantitySelection}
          />
        )}
      </SpaceWrapper>
    </HeaderActionsWrapper>
  );
};

export default HeaderActions;
