import { Navigate, Route, Routes } from "react-router-dom";
import { DocentePage } from "../pages/DocentePage";
import { InscripcionCard } from "../../../components/InscripcionCard";
import { NavbarDocente } from "../../../components/NavbarDocente";
import { useState } from "react";

export const DocenteRoutes = () => {
  const [menu, setMenu] = useState("");
  const funcionOnCloseMenu = () => {
    if (menu === "") setMenu("close");
    else setMenu("");
  };
  return (
    <>
      <NavbarDocente menu={menu} />
      <section className="home-section">
        <div className="home-content">
          <i
            className="bx bx-menu"
            id="bx-menu"
            onClick={funcionOnCloseMenu}
          ></i>
          <span className="text">Procesos</span>
        </div>
        <Routes>
          <Route path="/inscripcion" element={<DocentePage />} />
          <Route path="/inscripcion-proceso" element={<InscripcionCard />} />

          <Route path="/*" element={<Navigate to="/docente/inscripcion" />} />
        </Routes>
      </section>
    </>
  );
};
