import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getWinners } from "../../api/gaandores.api";

export const Ganadores = () => {
  const { pathname } = useLocation();
  console.log("info gana: ", pathname.split("/")[3]);

  const [ganadores, setGanadores] = useState([]);

  useEffect(() => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    const idSorteo = pathname.split("/")[3];
    const getGanadores = async () => {
      const res = await getWinners(acces_token, idSorteo);
      console.log("Ganadores: ", res.data);
      setGanadores(res.data);
    };
    getGanadores();
  }, []);

  return (
    <>
      <div
        style={{
          margin: "100px 200px",
          background: "rgb(217,217,217)",
          borderRadius: "25px",
        }}
      >
        <br></br>
        <h2 style={{ textAlign: 'center' }}>Lista de ganadores</h2>
        <br></br>
        <table
          className="table table-hover"
          style={{ margin: "0px 45px", width: "600px", height: "100px" }}
        >
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
            {ganadores.map((ganador) => (
              <tr key={ganador.id}>
                <th scope="row">1</th>
                <td> {ganador.user.name}</td>
                <td> {ganador.user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <Link
          to="/admin/sorteos"
          className="btn btn-danger"
          style={{ margin: "0px 300px" }}
        >
          Volver
        </Link>
        <br></br>
        <br></br>
      </div>
    </>
  );
};
