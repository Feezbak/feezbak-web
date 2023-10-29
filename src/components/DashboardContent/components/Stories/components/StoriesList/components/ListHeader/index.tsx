import { ListHeaderWrapper, HeaderStatusAndActions } from "./styles";
import { Col } from "antd";

const ListHeader = () => {
  return (
    <ListHeaderWrapper>
      <Col xs={24} sm={24} md={10} lg={12} xl={12} xxl={12}>
        <p>Story Title</p>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={8}>
        <HeaderStatusAndActions>
          <p>Status</p>
          <p>Actions</p>
        </HeaderStatusAndActions>
      </Col>
    </ListHeaderWrapper>
  );
};

export default ListHeader;
