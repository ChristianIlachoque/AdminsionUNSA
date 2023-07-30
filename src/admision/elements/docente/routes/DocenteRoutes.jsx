import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { DocentePage } from "../pages/DocentePage";
import { InscripcionCard } from "../../../components/InscripcionCard";
import { NavbarDocente } from "../../../components/NavbarDocente";
import { useState } from "react";
import { InscripcionEspera } from "../../../components/InscripcionEspera";

export const DocenteRoutes = () => {
  let algo = useLocation();
  console.log("algo Rout: ", algo);
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
          <Route path="/inscripcion-proceso2" element={<InscripcionEspera />} />

          <Route path="/*" element={<Navigate to="/docente/inscripcion" />} />
        </Routes>
      </section>
    </>
  );
};
