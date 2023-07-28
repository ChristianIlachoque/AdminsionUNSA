import { useEffect, useState } from "react";
import { getAllProcesos } from "../../api/inscripcion.api";
import { Link } from "react-router-dom";

export const InscripcionList = () => {
  const [procesos, setProcesos] = useState([]);
  //const [procesosActivos, setProcesosActivos] = useState([])
  useEffect(() => {
    async function loadProcesos() {
      const res = await getAllProcesos();
      setProcesos(res.data);
    }
    loadProcesos();
    //getProcesoActivos()
  }, []);

  // const getProcesoActivos = () => {
  //   let res = procesos.filter(proceso => {
  //     return proceso.isActived === true
  //   })
  //   setProcesosActivos(res)
  // }

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
            <div className="card-header">PROCESO ACTIVO</div>
            <div className="card-body">
              <h5 className="card-title">{proceso.title}</h5>
              <p className="card-text">{proceso.description}</p>
              <Link
                className="btn btn-primary"
                to="/docente/inscripcion-proceso"
              >
                Inscribirse
              </Link>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        ))}
      </div>

      {/* COMPONENTE 2 - Mensaje no existen procesos activos */}
      <div>
        <h2>No hay procesos activos</h2>
      </div>
    </>
  );
};
