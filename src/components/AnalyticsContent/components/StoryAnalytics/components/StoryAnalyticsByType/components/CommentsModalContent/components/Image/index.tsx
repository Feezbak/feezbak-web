import { ImageWrapper, Img } from "./styles";

interface Props {
  src: string;
}

const Image = ({ src }: Props) => {
  return (
    <ImageWrapper xs={24} sm={24} md={24} lg={9} xl={7} xxl={7}>
      <Img src={src} alt="story image" />
    </ImageWrapper>
  );
};

export default Image;
