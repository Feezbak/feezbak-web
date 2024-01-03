import { useMemo } from "react";
import {
  ButtonDataWrapper,
  ProgressText,
  ActionsAndInfoContainer,
  ColoredProgress,
  CommentsForChoiceBtn,
  VotesCount,
} from "./styles";

interface Props {
  hasComments?: boolean;
  text: string;
  commentsCount?: number;
  votesCount?: number;
  overallVotesCount: number;
  handleSeeMoreComments?: () => void;
}

const ResponseBTNTile = ({
  commentsCount,
  text,
  votesCount = 0,
  overallVotesCount,
  handleSeeMoreComments,
}: Props) => {
  const progress = useMemo(() => {
    return votesCount ? Math.round((votesCount * 100) / overallVotesCount) : 0;
  }, [votesCount, overallVotesCount]);

  const hasComments = useMemo(() => {
    return !!commentsCount;
  }, [commentsCount]);

  return (
    <ButtonDataWrapper>
      <ProgressText>
        <p>
          {text} • {progress}%
        </p>
        <ColoredProgress $width={progress === 0 ? 2 : progress} />
      </ProgressText>
      <ActionsAndInfoContainer>
        {!!votesCount && <VotesCount>{votesCount} Votes</VotesCount>}
        {hasComments && (
          <CommentsForChoiceBtn
            $hasMargin={false}
            ghost={true}
            onClick={handleSeeMoreComments}
          >
            See comments
          </CommentsForChoiceBtn>
        )}
      </ActionsAndInfoContainer>
    </ButtonDataWrapper>
  );
};

export default ResponseBTNTile;
