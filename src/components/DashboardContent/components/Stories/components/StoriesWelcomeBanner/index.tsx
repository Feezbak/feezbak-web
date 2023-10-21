import StoryWelcomeBannerImgSrc from "@images/sammy-line-delivery.png";
import {
  RowWrapper,
  StoriesWelcomeBannerWrapper,
  ImageWrapper,
  TextContent,
  BecomeProAdvice,
  Img,
} from "./styles";
const StoriesWelcomeBanner = () => {
  return (
    <StoriesWelcomeBannerWrapper
      xs={24}
      sm={24}
      md={24}
      lg={24}
      xl={24}
      xxl={24}
    >
      <RowWrapper>
        <TextContent xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <h3>Happy Decision Making!99995555</h3>
          <p>
            I'm really happy to see you here. I just know that you're going to
            make some fantastic decisions, thanks to all the reliable feedback
            you'll be receiving.
          </p>
          <BecomeProAdvice>
            <p>4 out of 6 stories used</p>
          </BecomeProAdvice>
        </TextContent>
        <ImageWrapper xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Img src={StoryWelcomeBannerImgSrc as string} loading="lazy" />
        </ImageWrapper>
      </RowWrapper>
    </StoriesWelcomeBannerWrapper>
  );
};

export default StoriesWelcomeBanner;
