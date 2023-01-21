import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, SignIn, SignUp, Profile } from "@/pages";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const UseCases = lazy(() => import("./pages/Dashboard/use-cases"));

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
            <Route caseSensitive path="use-cases" element={<UseCases />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Theres nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
