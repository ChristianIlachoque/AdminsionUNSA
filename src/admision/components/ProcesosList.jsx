import { useContext, useEffect, useState } from "react";
import { ProcesosForm } from "./ProcesosForm";
import { Link } from "react-router-dom";
import { ProcesosCard } from "./ProcesosCard";
import { getAllRondas } from "../../api/inscripcion.api";
import { AppContext } from "../../context/AppContext";

// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTYyODIyLCJpYXQiOjE2OTA2MTA4MjIsImp0aSI6IjliNDU2N2U1YzdlNzQ2ZjE5ZmE2ZGVmZThmM2YxZmVhIiwidXNlcl9pZCI6IjFkYjcyMzczLTY0NTAtNDU3OC1iY2E4LTk3YzQzMTE0NTc3MSJ9.XMi2CvjrCQ5eDFHArETTvoRPC8jdMfQ7YJ0V9L7pemo";

export const ProcesosList = () => {
  //const { acces_token } = useContext(AppContext);

  const [procesos, setProcesos] = useState([]);
  useEffect(() => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    async function loadProcesos() {
      const res = await getAllRondas(acces_token);
      console.log("All procesos", res.data);
      setProcesos(res.data);
    }

    loadProcesos();
  }, []);

  return (
    <>
      <h2 style={{ margin: "0px 30px" }}>Lista de los procesos</h2>
      <table
        className="table table-hover"
        style={{ margin: "30px 50px", width: "1000px", height: "100px" }}
      >
        <thead style={{textAlign: 'center'}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Autor</th>
            <th scope="col">Inscritos</th>
            <th scope="col">Estado</th>
            <th scope="col" colSpan="2">Sorteo</th>
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
