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

export const NavbarAdmin = ({ menu }) => {
  const { logout, user } = useContext(AppContext);

  const [subMenu1, setSubMenu1] = useState("");
  const [subMenu2, setSubMenu2] = useState("");
  const [subMenu3, setSubMenu3] = useState("");
  const [subMenu4, setSubMenu4] = useState("");
  const [subMenu5, setSubMenu5] = useState("");
  const [subMenu6, setSubMenu6] = useState("");

  const funcionShowMenu1 = () => {
    if (subMenu1 === "") setSubMenu1("showMenu");
    else setSubMenu1("");
  };
  const funcionShowMenu2 = () => {
    if (subMenu2 === "") setSubMenu2("showMenu");
    else setSubMenu2("");
  };
  const funcionShowMenu3 = () => {
    if (subMenu3 === "") setSubMenu3("showMenu");
    else setSubMenu3("");
  };
  const funcionShowMenu4 = () => {
    if (subMenu4 === "") setSubMenu4("showMenu");
    else setSubMenu4("");
  };
  const funcionShowMenu5 = () => {
    if (subMenu5 === "") setSubMenu5("showMenu");
    else setSubMenu5("");
  };
  const funcionShowMenu6 = () => {
    if (subMenu6 === "") setSubMenu6("showMenu");
    else setSubMenu6("");
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
                <span className="link_name">Espacios</span>
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
                  Espacios
                </a>
              </li>
              <li>
                <a href="#">Aulas</a>
              </li>
              <li>
                <a href="#">Escuelas</a>
              </li>
              <li>
                <a href="#">Pabellones</a>
              </li>
              <li>
                <a href="#">Áreas</a>
              </li>
            </ul>
          </li>
          <li className={`${subMenu2}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <BsPersonGear></BsPersonGear>
                </i>
                <span className="link_name">Personal</span>
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
                  Personal
                </a>
              </li>
              <li>
                <a href="#">Docentes</a>
              </li>
              <li>
                <a href="#">Postulantes</a>
              </li>
              <li>
                <a href="#">Personal adicional</a>
              </li>
            </ul>
          </li>
          <li className={`${subMenu3}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <GiPerspectiveDiceSixFacesRandom></GiPerspectiveDiceSixFacesRandom>
                </i>
                <span className="link_name">Sorteos</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu3}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Sorteos
                </a>
              </li>
              <li>
                <a href="#">Generar sorteo</a>
              </li>
              {/* <li>
                <a href="#">Ver Sorteos</a>
              </li> */}
              <Link to="/admin/sorteos">Ver Sorteos</Link>
              <li>
                <a href="#">Asignaciones</a>
              </li>
              <li>
                <a href="#">Credenciales</a>
              </li>
            </ul>
          </li>
          <li className={`${subMenu4}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <TbFaceIdError></TbFaceIdError>
                </i>
                <span className="link_name">Incidencias</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu4}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Incidencias
                </a>
              </li>
              <li>
                <a href="#">Crear incidencias</a>
              </li>
              <li>
                <a href="#">Incidencia aula</a>
              </li>
              <li>
                <a href="#">Incidencia personal</a>
              </li>
            </ul>
          </li>
          <li className={`${subMenu5}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <BiSolidReport></BiSolidReport>
                </i>
                <span className="link_name">Reportes</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu5}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Reportes
                </a>
              </li>
              <li>
                <a href="#">Asistencias</a>
              </li>
              <li>
                <a href="#">Pagos</a>
              </li>
              <li>
                <a href="#">Almuerzos</a>
              </li>
            </ul>
          </li>
          <li className={`${subMenu6}`}>
            <div className="iocn-link">
              <a href="#">
                <i>
                  <PiExamBold></PiExamBold>
                </i>
                <span className="link_name">Procesos</span>
              </a>
              <i
                className="bx bxs-chevron-down arrow "
                id="arrow"
                onClick={funcionShowMenu6}
              ></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Procesos
                </a>
              </li>
              {/* <li>
                <a href="#">Crear proceso</a>
              </li> */}
              <Link to="/admin/procesos-create">Crear Proceso</Link>
              {/* <li>
                <a href="#">Ver procesos</a>
              </li> */}
              <Link to="/admin/procesos">Ver Procesos</Link>
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
