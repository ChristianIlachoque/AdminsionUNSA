import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

// STYLES
import "./styles.css";
import icono from "../../assets/icono.png";
import unsa from "../../assets/unsa.png";
import { BiSolidSchool } from "react-icons/bi";
import { BsPersonGear } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { TbFaceIdError } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { PiExamBold } from "react-icons/pi";
// import { ProcesosPage } from "../pages";

export const NavbarDocente = ({ menu }) => {
  const { logout, user } = useContext(AppContext);

  const [subMenu1, setSubMenu1] = useState("");
  const [subMenu2, setSubMenu2] = useState("");

  const funcionShowMenu1 = () => {
    if (subMenu1 === "") setSubMenu1("showMenu");
    else setSubMenu1("");
  };
  const funcionShowMenu2 = () => {
    if (subMenu2 === "") setSubMenu2("showMenu");
    else setSubMenu2("");
  };

  return (
    <>
      <div className={`sidebar ${menu}`} id="sidebar">
        <br></br>
        <br></br>
        <div className="logo-details">
          <i className="">
            <img
              src={icono}
              style={{
                transform: "translate(+5%, -25%)",
                width: "60px",
                height: "80px",
              }}
            ></img>
          </i>
          <span className="logo_name">
            <img
              src={unsa}
              style={{
                transform: "translate(+5%, -10%)",
                width: "150px",
                height: "65px",
              }}
            ></img>
          </span>
        </div>

        <ul className="nav-links">
          <li className={`${subMenu1}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <BiSolidSchool></BiSolidSchool>
                </i>
                <span className="link_name">Procesos</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu1}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Procesos
                </a>
              </li>
              <Link to="/docente/inscripcion">Ver procesos Activos</Link>
              {/* <li>
                <a href="#">Ver procesos Activos</a>
              </li> */}
            </ul>
          </li>
          <li className={`${subMenu2}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <BsPersonGear></BsPersonGear>
                </i>
                <span className="link_name">Inscripciones</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu2}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Inscripciones
                </a>
              </li>
              <li>
                <a href="#">Ver inscripciones</a>
              </li>
            </ul>
          </li>
          <br></br>
          <br></br>
          <li>
            <div className="profile-details">
            <div className="profile-content">
                
                </div>
              <div className="name-job">
                <div className="profile_name">
                  {user.email.substring(0, user.email.search("@"))}
                </div>
                <div className="job">{user.user_type}</div>
              </div>
              <i className="bx bx-log-out" onClick={logout}></i>
            </div>
          </li>
        </ul>
      </div>
    </>
    // <nav>
    //   <ul>
    //     <Link to="/admin/procesos">Procesos</Link>
    //   </ul>
    //   <ul>
    //     <Link to="/admin/espacios">Espacios</Link>
    //   </ul>
    //   <ul>
    //     <Link to="/admin/postulantes">Postulantes</Link>
    //   </ul>
    //   <ul>
    //     <Link to="/admin/sorteos">Sorteos</Link>
    //   </ul>
    //   <ul>
    //     <Link to="/admin/reportes">Reportes</Link>
    //   </ul>
    //   <ul>
    //     <Link to="/admin/incidencias">Incidencias</Link>
    //   </ul>
    //   <ul>
    //     <button onClick={logout}>Logout</button>
    //   </ul>
    // </nav>
  );
};
