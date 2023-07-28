import { Navigate, Outlet, redirect } from "react-router-dom";

export const ProtectedRoutes = ({
  isAllowed,
  children,
  redirectTo = "/auth/login",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
