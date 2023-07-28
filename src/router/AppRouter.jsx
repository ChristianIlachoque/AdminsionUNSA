import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AdmisionRoutes } from "../admision/routes/AdmisionRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Navigate to="/auth/" />} /> */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<AdmisionRoutes />} />
    </Routes>
  );
};
