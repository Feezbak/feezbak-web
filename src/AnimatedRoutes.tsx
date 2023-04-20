import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UseCases from "@components/DashboardContent/components/UseCases";
import Stories from "@components/DashboardContent/components/Stories";
import PageNotFound from "@components/PageNotFound";
import {
  Landing,
  SignIn,
  SignUp,
  Profile,
  Dashboard,
  Create,
  Auth,
} from "@/pages";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route caseSensitive path="/" element={<Landing />} />
        <Route caseSensitive path="/sign-in" element={<SignIn />} />
        <Route caseSensitive path="/sign-up" element={<SignUp />} />
        <Route caseSensitive path="/profile" element={<Profile />} />
        <Route caseSensitive path="/auth/key/:id" element={<Auth />} />
        <Route caseSensitive path="/dashboard" element={<Dashboard />}>
          <Route index element={<Stories />} />
          <Route caseSensitive path="use-cases" element={<UseCases />} />
        </Route>
        <Route caseSensitive path="/create-story/:id" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
