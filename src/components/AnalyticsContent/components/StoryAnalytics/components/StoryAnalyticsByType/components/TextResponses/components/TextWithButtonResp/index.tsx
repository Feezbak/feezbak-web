import { ResponseBtnAnalyticsType } from "@/constants";
import ResponseBTNTile from "../../../ResponseBTNTile";
import { ResponseBtnsDataWrapper } from "./styles";
import { useMemo } from "react";

interface Props {
  data: ResponseBtnAnalyticsType[];
}

const TextWithButtonResp = ({ data }: Props) => {
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
    <ResponseBtnsDataWrapper>
      {data.map((btn) => (
        <ResponseBTNTile
          key={btn.id}
          text={btn.text}
          commentsCount={0}
          hasComments={false}
          votesCount={btn.votesCount!}
          overallVotesCount={overallVotesCount}
        />
      ))}
    </ResponseBtnsDataWrapper>
  );
};

export default TextWithButtonResp;
