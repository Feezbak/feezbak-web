import React, { lazy, useState } from "react";
import FormContent from "./components/FormContent";
import { ProfileRowWrapper } from "./styles";

const Selector = lazy(() => import("./components/ProfileFormSelector"));

const ProfileRow = () => {
  const [activeForm, setActiveForm] = useState(0);
  return (
    <ProfileRowWrapper>
      <Selector active={activeForm} setActive={setActiveForm} />
      <FormContent activeForm={activeForm} />
    </ProfileRowWrapper>
  );
};

export default ProfileRow;
