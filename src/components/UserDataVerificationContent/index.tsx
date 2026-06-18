import { useState } from "react";
import { verifyUserById } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { message, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { UserDataVerifyWrapper } from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const UserDataVerificationContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const { loading: isLoading } = useRequest(() => verifyUserById(id ?? ""), {
    onSuccess: (res: any) => {
      setVerified(true);
      if (res?.data?.accessToken && res?.data?.refreshToken) {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.refreshToken)
        );
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setTimeout(() => navigate("/sign-in"), 1500);
      }
    },
    onError: async (error: any) => {
      setTimeout(() => navigate("/not-found"), 2000);
      await message.error(getErrorMessage(error));
    },
  });

  return (
    <UserDataVerifyWrapper>
      <AnimatePresence>
        {verified ? (
          <motion.div
            key="success"
            {...opacityAnimation}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "3rem" }}>✓</div>
            <h2 style={{ marginTop: "0.5rem" }}>Email verified!</h2>
            <p style={{ opacity: 0.5 }}>Taking you to your dashboard…</p>
          </motion.div>
        ) : isLoading ? (
          <motion.div key="loading" {...opacityAnimation}>
            <Spin tip="Verifying…" size="large" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </UserDataVerifyWrapper>
  );
};

export default UserDataVerificationContent;
