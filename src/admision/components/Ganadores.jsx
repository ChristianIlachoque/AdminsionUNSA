import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
      <h1>Lista Ganadores</h1>
      <ul>
        {ganadores.map((ganador) => (
          <li key={ganador.id}>{ganador.user}</li>
        ))}
      </ul>
    </>
  );
};
