import { Link } from "react-router-dom";
export const InscripcionEspera = () => {
  return (
    <>
      <h1>Pagina Espera</h1>
      <h2>Ya es inscrito!</h2>
      <p>
        Hora de esperar. El sorteo será realizado el dd/mm/aaaa, los resultados
        podrán ser vistos el dd/mm/aaaa
      </p>
      <Link to="/docente/incripcion">Volver</Link>
    </>
  );
};
