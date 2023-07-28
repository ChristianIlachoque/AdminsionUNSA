import { Navigate, Outlet, redirect } from "react-router-dom";

export const ProtectedAdmin = ({
  isAdmin,
  children,
  redirectTo = "/docente/",
}) => {
  console.log("type: ", isAdmin);
  if (!isAdmin) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
