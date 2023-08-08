import { TextPairWrapper, Title, SecondaryText } from "./styles";

interface Props {
  title: string;
  text: string;
}

const TitleDescriptionPair = ({ title, text }: Props) => {
  return (
    <TextPairWrapper>
      <Title>{title}</Title>
      <SecondaryText>{text}</SecondaryText>
    </TextPairWrapper>
  );
};

export default TitleDescriptionPair;
