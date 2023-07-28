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
      <table
        className="table table-hover"
        style={{ margin: "140px 130px", width: "800px", height: "100px" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tipo evaluación</th>
            <th scope="col">Año</th>
            <th scope="col">VER</th>
          </tr>
        </thead>
        <tbody>
          {procesos.map((proceso) => (
            <ProcesosCard key={proceso.id} proceso={proceso} />
          ))}
        </tbody>
      </table>
    </>
  );
};
