import { opacityAnimation } from "@assets/framerAnimations";
import { FormContainer } from "./styles";
import UpdateProfileForm from "./components/UpdateProfileForm";

const ProfileForm = () => {
  return (
    <FormContainer {...opacityAnimation}>
      <UpdateProfileForm />
    </FormContainer>
  );
};

export default ProfileForm;
