import { BadgeWrapper } from "./styles";

interface Props {
  text: string;
  textColor: string;
  bgColor: string;
}
const Badge = ({ text, textColor, bgColor }: Props) => {
  return (
    <BadgeWrapper $textColor={textColor} $bgColor={bgColor}>
      {text}
    </BadgeWrapper>
  );
};

export default Badge;
