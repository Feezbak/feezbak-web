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
        <TextContent xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <h3>Don’t get confused where to ask feedback.</h3>
          <p>
            Get feedbacks from every platform in one place and take actions
            upon.
          </p>
          <BecomeProAdvice>
            {/*<p>4 out of 6 stories used</p>*/}
          </BecomeProAdvice>
        </TextContent>
        <ImageWrapper xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Img src={StoryWelcomeBannerImgSrc as string} loading="lazy" />
        </ImageWrapper>
      </RowWrapper>
    </StoriesWelcomeBannerWrapper>
  );
};

export default StoriesWelcomeBanner;
