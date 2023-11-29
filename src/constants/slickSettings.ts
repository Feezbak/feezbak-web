export const getPreviewSlickSettings = (
  isMobile: boolean,
  isSquare: boolean
) => ({
  dots: true,
  infinite: false,
  arrows: !isMobile && !isSquare,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

export const uploadListSlickSettings = {
  dots: false,
  infinite: false,
  arrows: false,
  initialSlide: 0,
  slidesToShow: 2,
  speed: 300,
  slidesToScroll: 2,
  className: "upload-list-slider",
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
