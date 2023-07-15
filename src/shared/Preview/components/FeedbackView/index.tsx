import React from "react";
import Demo from "../../components/Demo";
import { DemoWrapper } from "./styles";

interface Props {
  storyData: any;
}

const FeedbackView = ({ storyData }: Props) => {
  const {
    type,
    background,
    title,
    titleColor,
    imageVoting: { images, selectedImgSrc, isSquare },
    response: { responseBtnList },
    userInfoFields,
  } = storyData;
  console.log(storyData, 7777);
  return (
    <DemoWrapper>
      <Demo
        isCreationMode={false}
        responseButtons={responseBtnList}
        title={title}
        titleColor={titleColor}
        type={type}
        coverImgSrc={selectedImgSrc}
        images={images}
        isSquare={isSquare}
        color={background}
        userInfoFields={userInfoFields}
      />
    </DemoWrapper>
  );
};

export default FeedbackView;
