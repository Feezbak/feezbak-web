import { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { FormWrapper } from "./styles";

interface Props {
  activeForm: number;
}

const ProfileForm = lazy(() => import("./components/ProfileForm"));
const PasswordForm = lazy(() => import("./components/PasswordForm"));

const FormContent = ({ activeForm }: Props) => {
  return (
    <FormWrapper xs={20} sm={20} md={18} lg={18} xl={18} xxl={18}>
      <AnimatePresence initial={false}>
        {activeForm ? <PasswordForm /> : <ProfileForm />}
      </AnimatePresence>
    </FormWrapper>
  );
};

export default FormContent;
