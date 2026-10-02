import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }

  return (
    <Navigate to="/auth/login" state={location.pathname} replace></Navigate>
  );
};

export default PrivetRoutes;
