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
          <div key={proceso.id}>
            <h4>{proceso.title}</h4>
            <p>{proceso.description}</p>
            <Link to="/docente/inscripcion-proceso" proceso={proceso}>
              Inscribirse
            </Link>
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
