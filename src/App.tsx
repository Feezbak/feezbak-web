import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing, SignIn, SignUp, Dashboard } from "@/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Theres nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
