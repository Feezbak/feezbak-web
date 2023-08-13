import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { isAuth } from "@/hooks";
import { message } from "antd";
import { useRecoilState } from "recoil";
import { userData } from "@/recoil";
import useRequest from "@ahooksjs/use-request";
import { getMyProfile } from "@/api";
import UseCases from "@components/DashboardContent/components/UseCases";
import Stories from "@components/DashboardContent/components/Stories";
import { PageNotFound, PrivateRoute } from "@/components";
import {
  Feedback,
  SignIn,
  SignUp,
  Create,
  Verify,
  Profile,
  Landing,
  Dashboard,
  StoryDetails,
  ForgotPassword,
  ResetPassword,
} from "@/pages";

const AnimatedRoutes = () => {
  const authed = isAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
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

  useLayoutEffect(() => {
    if (
      authed &&
      (pathname === "/sign-in" ||
        pathname === "/sign-up" ||
        pathname === "/forgot-password" ||
        pathname === "/reset-password")
    ) {
      /*
         Checking when user already authed in system, but manualy changing url.
       */
      setTimeout(() => navigate("/dashboard"), 0);
    }

    if (authed && !pathname.includes("/create-story")) {
      /*
         removing previusly created and saved story data from Storage.
       */
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== "token" && key !== "refreshToken") {
          localStorage.removeItem(key!);
        }
      }
    }
  }, [authed, pathname, navigate]);

  useEffect(() => {
    if (authed) {
      if (
        !user?.firstName &&
        (pathname.includes("/create-story") ||
          pathname.includes("/story-details"))
      ) {
        (async () => await getProfileData())();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, user]);

  return (
    <AnimatePresence>
      <Routes>
        <Route caseSensitive path="/" element={<Landing />} />
        <Route caseSensitive path="/sign-in" element={<SignIn />} />
        <Route caseSensitive path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          caseSensitive
          path="/profile"
          element={
            <PrivateRoute pathName="/profile">
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          caseSensitive
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route caseSensitive path="story/:storyId" element={<Feedback />} />
        <Route
          caseSensitive
          path="/reset-password/:id"
          element={<ResetPassword />}
        />
        <Route caseSensitive path="/verify/:id" element={<Verify />} />
        <Route
          caseSensitive
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Stories />} />
          <Route caseSensitive path="use-cases" element={<UseCases />} />
        </Route>
        <Route
          caseSensitive
          path="/create-story/:id"
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        />
        <Route
          caseSensitive
          path="/story-details/:id"
          element={
            <PrivateRoute>
              <StoryDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
