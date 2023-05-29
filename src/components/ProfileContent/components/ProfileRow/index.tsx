import React, { lazy, useState } from "react";
import { ProfileRowWrapper } from "./styles";

const Selector = lazy(() => import("./components/ProfileFormSelector"));
const ProfileForm = lazy(() => import("./components/ProfileForm"));
//const PasswordForm = lazy(() => import("./components/PasswordForm"));

const ProfileRow = () => {
  const [activeForm, setActiveForm] = useState(0);
  return (
    <ProfileRowWrapper>
      <Selector active={activeForm} setActive={setActiveForm} />
      <ProfileForm />
    </ProfileRowWrapper>
  );
};

export default ProfileRow;
