import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { isAuth } from "@/hooks";
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
        <Route caseSensitive path="/feedback/:id" element={<Feedback />} />
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
