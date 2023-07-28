import { useEffect, useState } from "react";
import { getAllProcesos } from "../../api/procesos.api";
import { ProcesosForm } from "./ProcesosForm";
import { Link } from "react-router-dom";
import { ProcesosCard } from "./ProcesosCard";

export const ProcesosList = () => {
  const [procesos, setProcesos] = useState([]);
  useEffect(() => {
    async function loadProcesos() {
      const res = await getAllProcesos();
      console.log(res.data);
      setProcesos(res.data);
    }
    loadProcesos();
  }, []);

  return (
    <>
      <h2>Procesos List</h2>
      {procesos.map((proceso) => (
        <ProcesosCard key={proceso.id} proceso={proceso} />
      ))}

      <hr />
      <Link to="/admin/procesos-create">Crear Proceso</Link>
    </>
  );
};
