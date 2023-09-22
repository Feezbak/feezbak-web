import { ResponseBtnAnalyticsType } from "@/constants";
import ResponseBTNTile from "../ResponseBTNTile";
import { ResponseBtnsDataWrapper } from "./styles";
import { useMemo } from "react";

interface Props {
  data: ResponseBtnAnalyticsType[];
}

const ResponseWithBTNAndComment = ({ data }: Props) => {
  const overallVotesCount = useMemo(
    () =>
      data.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue?.votesCount ?? 0),
        0
      ),
    [data]
  );

  return (
    <ResponseBtnsDataWrapper xs={24} sm={24} md={17} lg={18} xl={18} xxl={18}>
      {data.map((btn) => (
        <ResponseBTNTile
          key={btn.id}
          text={btn.text}
          commentsCount={btn.votesCount}
          votesCount={btn.votesCount!}
          overallVotesCount={overallVotesCount}
        />
      ))}
    </ResponseBtnsDataWrapper>
  );
};

export default ResponseWithBTNAndComment;
