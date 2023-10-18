export const getSlickSettings = (isMobile: boolean) => ({
  dots: true,
  infinite: false,
  arrows: !isMobile,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
