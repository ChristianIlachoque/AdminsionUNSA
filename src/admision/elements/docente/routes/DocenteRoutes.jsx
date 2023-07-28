import { Navigate, Route, Routes } from "react-router-dom";
import { DocentePage } from "../pages/DocentePage";
import { InscripcionCard } from "../../../components/InscripcionCard";

export const DocenteRoutes = () => {
  return (
    <Routes>
      <Route path="/inscripcion" element={<DocentePage />} />
      <Route path="/inscripcion-proceso" element={<InscripcionCard />} />

      <Route path="/*" element={<Navigate to="/docente/inscripcion" />} />
    </Routes>
  );
};
