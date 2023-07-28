import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";
import { ProcesosPage } from "../../../pages";
import { ProcesosForm } from "../../../components/ProcesosForm";

export const AdminRoutes = ({ isAdmin }) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/procesos" element={<ProcesosPage />} />
        <Route path="/procesos-create" element={<ProcesosForm />} />
        <Route path="/procesos/:id" element={<ProcesosForm />} />
        <Route path="/espacios" element={<h1>Espacios Main</h1>} />
        <Route path="/postulantes" element={<h1>Postulante Main</h1>} />
        <Route path="/sorteos" element={<h1>Sorteos Main</h1>} />
        <Route path="/reportes" element={<h1>Reportes Main</h1>} />
        <Route path="/incidencias" element={<h1>Incidencias Main</h1>} />

        <Route path="/*" element={<Navigate to="/admin/procesos" />} />
      </Routes>
    </>
  );
};
