import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  getAllEvaluaciones,
  getAllInscripciones,
  getAllRondas,
} from "../../api/inscripcionUser.api";
import { AppContext } from "../../context/AppContext";
// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MjM3MTM0LCJpYXQiOjE2OTA2ODUxMzQsImp0aSI6IjNiZGUxNWQ0NDYxZDRkMTNiYWZmZDI5NmE2M2JhMmU4IiwidXNlcl9pZCI6IjI4ZDNjMzZhLWZlNzQtNDE5Zi05ZmJmLWM3ZWNkOTczZDRiYiJ9.MshqTJOn5DhhIk4Fw4bOQsNbaq7xffV01-Jc2gSjGH0";

export const InscripcionList = () => {
  // const { acces_token } = useContext(AppContext);
  const [procesos, setProcesos] = useState([]);
  const [inscripcionesIds, setInscripcionesIds] = useState([]);
  //const [procesosActivos, setProcesosActivos] = useState([])
  useEffect(() => {
    async function loadProcesos() {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllRondas(acces_token);
      setProcesos(res.data);
      console.log("rondas: ", res.data);
    }
    loadProcesos();
    //getProcesoActivos()
  }, []);

  useEffect(() => {
    const getInscripcionesID = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllInscripciones(acces_token);
      console.log("inscripciones: ", res.data);
      const newListId = res.data.map((ins) => {
        return ins.round_inscription.id;
      });
      console.log("incrip list 11: ", newListId);
      setInscripcionesIds(newListId);
    };
    getInscripcionesID();
  }, []);

  const [evaluaciones, setEvaluaciones] = useState([]);
  useEffect(() => {
    const getEvaluaciones = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllEvaluaciones(acces_token);
      setEvaluaciones(res.data);
    };
    getEvaluaciones();
  }, []);
  // const getProcesoActivos = () => {
  //   let res = procesos.filter(proceso => {
  //     return proceso.isActived === true
  //   })
  //   setProcesosActivos(res)
  // }

  {
    /* COMPONENTE 2 - Mensaje no existen procesos activos */
  }
  if (procesos.length === 0) {
    return (
      <div>
        <h2>No hay procesos activos</h2>
      </div>
    );
  }

  return (
    <>
      {/* Componente Lista de procesos activos */}
      {/* Se valida si existen procesos */}

      {/* COMPONENTE 1 - existen procesos */}
      <div>
        <h3>Inscripcion List</h3>
        {procesos.map((proceso) => (
          <div
            className="card text-center"
            style={{ margin: "10px 100px" }}
            key={proceso.id}
          >
            <div className="card-header">
              {proceso.is_active ? "PROCESO ACTIVO" : "PROCESO TERMINADO"}
            </div>
            <div className="card-body">
              <h5 className="card-title">{proceso.evaluation.name}</h5>
              {/* {evaluaciones.map((evl) => {
                if (evl.id === proceso.evaluation)
                  return (
                    
                  );
              })} */}

              <p className="card-text">sin info extra</p>
              {inscripcionesIds.includes(proceso.id) ? (
                <Link
                  className="btn btn-primary"
                  to="/docente/inscripcion-proceso2/"
                  state={proceso}
                >
                  Inscrito
                </Link>
              ) : (
                <Link
                  className="btn btn-primary"
                  to="/docente/inscripcion-proceso/"
                  state={proceso}
                >
                  Inscribirse
                </Link>
              )}
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        ))}
      </div>
    </>
  );
};
