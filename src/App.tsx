import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, SignIn, SignUp, Profile, Dashboard, Create } from "@/pages";
import UseCases from "@components/DashboardContent/components/UseCases";
import Stories from "@components/DashboardContent/components/Stories";
import PageNotFound from "@components/PageNotFound";

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route caseSensitive path="/" element={<Landing />} />
          <Route caseSensitive path="/sign-in" element={<SignIn />} />
          <Route caseSensitive path="/sign-up" element={<SignUp />} />
          <Route caseSensitive path="/profile" element={<Profile />} />
          <Route caseSensitive path="/dashboard" element={<Dashboard />}>
            <Route index element={<Stories />} />
            <Route caseSensitive path="use-cases" element={<UseCases />} />
          </Route>
          <Route caseSensitive path="/create-story/:id" element={<Create />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
