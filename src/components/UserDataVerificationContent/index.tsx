import { verifyUserById } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { message, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { UserDataVerifyWrapper } from "./styles";

const UserDataVerificationContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading: isLoading } = useRequest(() => verifyUserById(id ?? ""), {
    onSuccess: () => {
      navigate("/sign-in");
    },
    onError: async (error: any) => {
      setTimeout(() => navigate("/not-found"), 2000);
      await message.error(error?.response?.data?.message ?? "");
    },
  });

  return (
    <UserDataVerifyWrapper>
      <AnimatePresence>
        {isLoading && (
          <motion.div {...opacityAnimation}>
            <Spin tip="Loading" size="large" />
          </motion.div>
        )}
      </AnimatePresence>
    </UserDataVerifyWrapper>
  );
};

export default UserDataVerificationContent;
