import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Navbar = () => {
  const { logout } = useContext(AppContext);
  return (
    <nav>
      <ul>
        <Link to="/admin/procesos">Procesos</Link>
      </ul>
      <ul>
        <Link to="/admin/espacios">Espacios</Link>
      </ul>
      <ul>
        <Link to="/admin/postulantes">Postulantes</Link>
      </ul>
      <ul>
        <Link to="/admin/sorteos">Sorteos</Link>
      </ul>
      <ul>
        <Link to="/admin/reportes">Reportes</Link>
      </ul>
      <ul>
        <Link to="/admin/incidencias">Incidencias</Link>
      </ul>
      <ul>
        <button onClick={logout}>Logout</button>
      </ul>
    </nav>
  );
};
