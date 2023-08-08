import { opacityAnimation } from "@assets/framerAnimations";
import { SkeletonWrapper, SkeletonInput } from "./styles";

const StorySkeleton = () => {
  return (
    <SkeletonWrapper {...opacityAnimation}>
      <SkeletonInput active={true} />
    </SkeletonWrapper>
  );
};

export default StorySkeleton;
