import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");

    if (accessToken && refreshToken) {
      localStorage.setItem("token", JSON.stringify(accessToken));
      localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/sign-in", { replace: true });
    }
  }, [navigate, search]);

  return null;
};

export default GoogleAuthCallback;
