import React, { lazy } from "react";
import { ProfileRowWrapper } from "./styles";

const ProfileFormSelector = lazy(
  () => import("./components/ProfileFormSelector")
);
const ProfileForm = lazy(() => import("./components/ProfileForm"));
//const PasswordForm = lazy(() => import("./components/PasswordForm"));

const ProfileRow = () => {
  return (
    <ProfileRowWrapper>
      <ProfileFormSelector />
      <ProfileForm />
    </ProfileRowWrapper>
  );
};

export default ProfileRow;
