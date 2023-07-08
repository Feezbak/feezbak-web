import React, { Suspense, useEffect } from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import Fallback from "@components/Fallback";
import { userData } from "@/recoil";
import { useRecoilState } from "recoil";
import { getMyProfile } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { message } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [user, setUserData] = useRecoilState(userData);

  const { run: getProfileData } = useRequest(() => getMyProfile(), {
    manual: true,
    onSuccess: (resp) => {
      setUserData(resp.data);
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message ?? "");
    },
  });

  useEffect(() => {
    //checking if user exists or not
    if (!user?.verified) {
      (async () => await getProfileData())();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
