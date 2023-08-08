import { Suspense } from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import Fallback from "@components/Fallback";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
