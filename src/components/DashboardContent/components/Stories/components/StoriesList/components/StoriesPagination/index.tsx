import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { PaginationWrapper } from "./styles";

interface Props {
  total: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const StoriesPagination = ({
  total,
  pageSize,
  currentPage,
  setCurrentPage,
}: Props) => {
  const navigate = useNavigate();
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  return (
    <PaginationWrapper>
      <Pagination
        defaultCurrent={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
      />
    </PaginationWrapper>
  );
};

export default StoriesPagination;
