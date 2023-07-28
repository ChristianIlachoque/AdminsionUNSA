import { Navigate, Outlet, redirect } from "react-router-dom";

export const ProtectedDocente = ({
  user_type,
  children,
  redirectTo = "/admin/",
}) => {
  if (user_type !== "TEACHER") {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
