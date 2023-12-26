import { CreatedByFeezBlackIcon, CreatedByFeezWhiteIcon } from "@/icons";
import { CreatedByWrapper, CreatedByText } from "./styles";
import { StyleEnums } from "@/enums";

interface Props {
  margins: string;
  color?: StyleEnums;
  isDark?: boolean;
}

const CreatedBy = ({
  margins,
  color = StyleEnums.black,
  isDark = true,
}: Props) => {
  return (
    <CreatedByWrapper $margins={margins}>
      <CreatedByText $color={color}>Created by</CreatedByText>
      {isDark ? <CreatedByFeezBlackIcon /> : <CreatedByFeezWhiteIcon />}
    </CreatedByWrapper>
  );
};

export default CreatedBy;
