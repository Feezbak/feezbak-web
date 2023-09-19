import { useMemo } from "react";
import { GroupUsersIcon } from "@/icons";
import {
  ButtonDataWrapper,
  ProgressText,
  ActionsAndInfoContainer,
  ColoredProgress,
  CommentsForChoiceBtn,
  VotesForChoiceBtn,
} from "./styles";

interface Props {
  hasComments?: boolean;
  text: string;
  commentsCount?: number;
  votesCount?: number;
  overallVotesCount: number;
}

const ResponseBTNTile = ({
  commentsCount,
  text,
  votesCount = 0,
  overallVotesCount,
  hasComments = false,
}: Props) => {
  const progress = useMemo(() => {
    return votesCount ? Math.round((votesCount * 100) / overallVotesCount) : 0;
  }, [votesCount, overallVotesCount]);

  return (
    <ButtonDataWrapper>
      <ProgressText>
        <p>
          {text} - <b>{progress}</b>%
        </p>
        <ColoredProgress $width={progress === 0 ? 2 : progress} />
      </ProgressText>
      <ActionsAndInfoContainer>
        {hasComments && (
          <CommentsForChoiceBtn $hasMargin={false}>
            See {commentsCount} comments
          </CommentsForChoiceBtn>
        )}
        <VotesForChoiceBtn>
          <GroupUsersIcon />
          <span>{votesCount} Votes</span>
        </VotesForChoiceBtn>
      </ActionsAndInfoContainer>
    </ButtonDataWrapper>
  );
};

export default ResponseBTNTile;
