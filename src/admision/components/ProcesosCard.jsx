import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProcesosCard = ({ proceso }) => {
  const navigate = useNavigate();
  return (
    <tr>
      {/* //FALTA OBTENER EL NOMBRE DE AUTHOR Y DEL NOMBRE DE LA EVALUACION */}
      <th scope="row">1</th>
      <td>{proceso.evaluation}</td>
      <td>{proceso.user_creator}</td>
      <td>{proceso.is_active ? "activo" : "terminado"}</td>
      <td>
        <div
          className="btn btn-primary"
          onClick={() => {
            navigate(`/admin/procesos/${proceso.id}`);
          }}
        >
          Ver
        </div>
      </td>
      <td>
        <Link className="btn btn-success" to="/admin/sorteos-create">
          Crear
        </Link>
      </td>
    </tr>
  );
};
