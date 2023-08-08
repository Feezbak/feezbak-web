import { Navigate } from "react-router-dom";
import { isAuth } from "@/hooks";

interface Props {
  children: any;
  pathName?: string;
}

const PrivateRoute = ({ children, pathName }: Props) => {
  const authed = isAuth(); // isauth() returns true or false based on localStorage
  return authed ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
