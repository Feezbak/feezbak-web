import { UserCommentsType } from "@/constants";
import {
  CommentTileWrapper,
  Comment,
  UserInfoSection,
  SecondaryInfo,
  UserAvatar,
  UserInfo,
  Name,
} from "./styles";
import { useMemo } from "react";

interface Props {
  data: UserCommentsType;
  index: number;
}

const ResponseCommentTile = ({ data, index }: Props) => {
  const userName = useMemo(() => {
    if (data?.firstName?.length || data?.lastName?.length) {
      return data.firstName + " " + data.lastName;
    } else {
      return "Anonymous";
    }
  }, [data]);

  return (
    <CommentTileWrapper>
      <UserInfoSection>
        <UserAvatar
          src={
            `https://avatars.dicebear.com/api/open-peeps/${data._id.substring(
              0,
              3
            )}` +
            index +
            ".svg"
          }
          alt="user avatar"
        />
        <UserInfo>
          <Name>{userName}</Name>
          <SecondaryInfo></SecondaryInfo>
        </UserInfo>
      </UserInfoSection>
      <Comment>{data.msg}</Comment>
    </CommentTileWrapper>
  );
};

export default ResponseCommentTile;
