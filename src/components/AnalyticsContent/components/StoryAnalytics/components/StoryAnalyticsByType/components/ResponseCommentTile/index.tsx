import { useMemo } from "react";
import { UserCommentsType } from "@/constants";
import { EmailIcon, PhoneIcon } from "@/icons";
import dayjs from "dayjs";
import {
  CommentTileWrapper,
  UserInfoSection,
  SecondaryInfo,
  ContactBlock,
  UserAvatar,
  Contacts,
  UserInfo,
  Comment,
  Name,
} from "./styles";

interface Props {
  data: UserCommentsType;
  hasHorizontalPadding?: boolean;
}

const ResponseCommentTile = ({ data, hasHorizontalPadding = true }: Props) => {
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
    <CommentTileWrapper $hasHorizontalPadding={hasHorizontalPadding}>
      <UserInfoSection>
        <UserAvatar
          src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${avatarSrc}`}
          alt="user avatar"
        />
        <UserInfo>
          <Name>{userName}</Name>
          <SecondaryInfo>{commentDate}</SecondaryInfo>
          <Contacts>
            {data?.email && (
              <ContactBlock>
                <EmailIcon />
                <p>{data.email}</p>
              </ContactBlock>
            )}
            {data?.phone && (
              <ContactBlock>
                <PhoneIcon />
                <p>+{data.phone}</p>
              </ContactBlock>
            )}
          </Contacts>
        </UserInfo>
      </UserInfoSection>
      <Comment>{data.commentText}</Comment>
    </CommentTileWrapper>
  );
};

export default ResponseCommentTile;
