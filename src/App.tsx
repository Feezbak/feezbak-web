import React, { Suspense } from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import Fallback from "@components/Fallback";
//import { userData } from "@/recoil";
//import { useRecoilState } from "recoil";
//import {getProfile} from "@/api";
//import useRequest from "@ahooksjs/use-request";
//import {message} from "antd";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  //  const [user, setUserData] = useRecoilState(userData);
  //
  //  const { run: getProfileData } = useRequest(() => getProfile('sfdfh'), {
  //    manual: true,
  //    onSuccess: (resp) => {
  //      setUserData(resp.data)
  //      },
  //    onError: (error: any) => {
  //      message.error(error?.response?.data?.message ?? "");
  //      },
  //  });
  //
  //  useEffect(() => {
  //    if(!user?.verified){
  //      (async () => await getProfileData())()
  //    }
  //  }, [user]);

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
