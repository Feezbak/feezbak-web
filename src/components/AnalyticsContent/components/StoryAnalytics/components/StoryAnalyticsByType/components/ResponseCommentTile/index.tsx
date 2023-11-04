import { useMemo } from "react";
import { UserCommentsType } from "@/constants";
import dayjs from "dayjs";
import {
  CommentTileWrapper,
  Comment,
  UserInfoSection,
  SecondaryInfo,
  Contacts,
  UserAvatar,
  UserInfo,
  Name,
} from "./styles";

interface Props {
  data: UserCommentsType;
  index?: number;
}

const ResponseCommentTile = ({ data, index }: Props) => {
  const userName = useMemo(() => {
    if (data?.firstName?.length || data?.lastName?.length) {
      return data.firstName + " " + data.lastName;
    } else {
      return "Anonymous";
    }
  }, [data]);

  const commentDate = useMemo(() => {
    const date = dayjs(data.createdAt, { format: "YYYY-MM-DD HH:mm:ss" });
    return date.format("MMMM D, YYYY • HH:mm");
  }, [data.createdAt]);

  const avatarSrc = useMemo(() => dayjs(data.createdAt).unix(), [data]);

  return (
    <CommentTileWrapper>
      <UserInfoSection>
        <UserAvatar
          src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${avatarSrc}`}
          alt="user avatar"
        />
        <UserInfo>
          <Name>{userName}</Name>
          <SecondaryInfo>{commentDate}</SecondaryInfo>
          <Contacts>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </Contacts>
        </UserInfo>
      </UserInfoSection>
      <Comment>{data.commentText}</Comment>
    </CommentTileWrapper>
  );
};

export default ResponseCommentTile;
