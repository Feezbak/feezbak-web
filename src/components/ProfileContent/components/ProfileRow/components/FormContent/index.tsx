import { lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { FormWrapper } from "./styles";

interface Props {
  activeForm: number;
}

const ProfileForm = lazy(() => import("./components/ProfileForm"));
const PasswordForm = lazy(() => import("./components/PasswordForm"));
const PlanForm = lazy(() => import("./components/PlanForm"));

const FormContent = ({ activeForm }: Props) => {
  return (
    <FormWrapper xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
      <AnimatePresence initial={false}>
        {activeForm === 0 && <ProfileForm />}
        {activeForm === 1 && <PasswordForm />}
        {activeForm === 2 && <PlanForm />}
      </AnimatePresence>
    </FormWrapper>
  );
};

export default FormContent;
