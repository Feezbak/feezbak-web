import { CreatedByWrapper } from "./styles";
import { CreatedByFeezBlackIcon } from "@/icons";

interface Props {
  margins: string;
}

const CreatedBy = ({ margins }: Props) => {
  return (
    <CreatedByWrapper $margins={margins}>
      <p>Created by</p>
      <CreatedByFeezBlackIcon />
    </CreatedByWrapper>
  );
};

export default CreatedBy;
