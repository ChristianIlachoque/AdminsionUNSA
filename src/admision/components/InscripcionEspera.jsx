import { Link } from "react-router-dom";
export const InscripcionEspera = () => {
  return (
    <>
      <h1 style={{margin: '0px 30px'}}>Pagina Espera</h1>
      <div style={{margin: '100px 350px',
                  background: 'rgb(217,217,217)',
                  borderRadius: '25px',
                  textAlign: 'center'}}>
      <br></br>
      <h2 style={{margin: '0px 50px'}}>Ya esta inscrito!</h2>
      <br></br>
      <p style={{margin: '0px 50px'}}>
        Hora de esperar. El sorteo será realizado el dd/mm/aaaa, los resultados
        podrán ser vistos el dd/mm/aaaa
      </p>
      <br></br>
      <div style={{margin: '0px 100px'}}>
      <Link to="/docente/incripcion" className="btn btn-danger" style={{margin: '0px 50px'}}>
        Volver
      </Link>
      <br></br><br></br>
      </div>
      </div>
    </>
  );
};
