import { useState, useEffect, useContext } from "react";
import { getAllSorteos } from "../../api/sorteos.api";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { SorteosCard } from "./SorteosCard";

// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTYyODIyLCJpYXQiOjE2OTA2MTA4MjIsImp0aSI6IjliNDU2N2U1YzdlNzQ2ZjE5ZmE2ZGVmZThmM2YxZmVhIiwidXNlcl9pZCI6IjFkYjcyMzczLTY0NTAtNDU3OC1iY2E4LTk3YzQzMTE0NTc3MSJ9.XMi2CvjrCQ5eDFHArETTvoRPC8jdMfQ7YJ0V9L7pemo";
export const SorteosList = () => {
  const navigate = useNavigate();
  const { acces_token } = useContext(AppContext);
  const [sorteos, setSorteos] = useState([]);

  useEffect(() => {
    async function loadSorteos() {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllSorteos(acces_token);
      console.log("list sorteos: ", res.data);
      setSorteos(res.data);
    }
    loadSorteos();
  }, []);
  return (
    <>
      <h1 style={{margin: '0px 50px'}}>Lista de sorteos</h1>
      <table
        className="table table-hover"
        style={{ margin: "30px 50px", width: "1000px", height: "100px" }}
      >
        <thead style={{textAlign: 'center'}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Proceso</th>
            <th scope="col">Usuario Sorteador</th>
            <th scope="col">Nº Ganadores</th>
            <th scope="col">Ver</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {sorteos.map((sorteo) => (
            <SorteosCard key={sorteo.id} sorteo={sorteo} />
          ))}
          </tbody>
      </table>
    </>
  );
};
