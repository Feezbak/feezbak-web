import { opacityAnimation } from "@assets/framerAnimations";
import UpdateProfileForm from "./components/UpdateProfileForm";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import { FormContainer } from "./styles";

const ProfileForm = () => {
  const userRecoilData = useRecoilValue(userData);

  return (
    <FormContainer {...opacityAnimation}>
      {userRecoilData?.firstName && (
        <UpdateProfileForm userRecoilData={userRecoilData} />
      )}
    </FormContainer>
  );
};

export default ProfileForm;
