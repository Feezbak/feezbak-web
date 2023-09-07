import { Spin } from "antd";
import { PageLoaderWrapper } from "./styles";
import { opacityAnimation } from "@assets/framerAnimations";

const PageLoader = () => {
  return (
    <PageLoaderWrapper {...opacityAnimation}>
      <Spin tip="Loading" size="large" />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
