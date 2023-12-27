import { ImageWrapper, Img } from "./styles";

interface Props {
  src: string;
}

const Image = ({ src }: Props) => {
  return (
    <ImageWrapper xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
      <Img src={src} alt="story image" />
    </ImageWrapper>
  );
};

export default Image;
