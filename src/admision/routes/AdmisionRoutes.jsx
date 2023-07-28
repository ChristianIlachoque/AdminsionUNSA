import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "../elements/admin/routes/AdminRoutes";
import { DocenteRoutes } from "../elements/docente/routes/DocenteRoutes";
import { ProtectedRoutes } from "../../components/ProtectedRoutes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { ProtectedAdmin } from "../../components/ProtectedAdmin";
import { ProtectedDocente } from "../../components/ProtectedDocente";

export const AdmisionRoutes = () => {
  const { user, setUser } = useContext(AppContext);

  console.log("dataUser: ", user);
  console.log("INFO ROUT", JSON.parse(localStorage.getItem("user")));
  //setUser(JSON.parse(localStorage.getItem("user")));

  return (
    <Routes>
      <Route
        element={<ProtectedRoutes isAllowed={!!user} redirectTo="/auth" />}
      >
        <Route
          path="/admin/*"
          element={
            <ProtectedRoutes
              isAllowed={!!user && user.user_type === "ADMIN"}
              redirectTo="/docente"
            >
              <AdminRoutes />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/docente/*"
          element={
            <ProtectedRoutes isAllowed={!!user && user.user_type === "TEACHER"}>
              <DocenteRoutes />
            </ProtectedRoutes>
          }
        />
      </Route>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
