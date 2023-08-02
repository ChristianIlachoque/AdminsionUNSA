import { useNavigate } from "react-router-dom";
import { deleteSorteo } from "../../api/sorteos.api";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const SorteosCard = ({ sorteo }) => {
  const { acces_token } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <tr key={sorteo.id}>
      {/* //FALTA OBTENER EL NOMBRE DE AUTHOR Y DEL NOMBRE DE LA EVALUACION */}
      <th scope="row">1</th>
      <td>{sorteo.round_inscription.evaluation.name}</td>
      <td>{sorteo.raffle_user.email}</td>
      <td style={{textAlign: 'center'}}>{sorteo.number_of_winners}</td>
      <td>
        <div
          className="btn btn-primary"
          onClick={() => {
            navigate(`/admin/ganadores/${sorteo.id}`);
          }}
        >
          Ganadores
        </div>
      </td>
      <td>
        <div
          className="btn btn-danger"
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteSorteo(acces_token, sorteo.id);
              navigate("/admin/procesos");
            }
          }}
        >
          Eliminar
        </div>
      </td>
      {/* <td>
        <div
          className="btn btn-primary"
          onClick={() => {
            navigate(`/admin/sorteos/${sorteo.id}`);
          }}
        >
          Editar
        </div>
      </td> */}
      {/* <td>
                {procesosIDs.includes(proceso.id) ? (
                  <button className="btn btn-secondary" disabled>
                    Creado
                  </button>
                ) : (
                  <Link
                    className="btn btn-secondary"
                    to="/admin/sorteos-create/"
                    state={proceso}
                  >
                    Crear
                  </Link>
                )}
              </td> */}
    </tr>
  );
};
