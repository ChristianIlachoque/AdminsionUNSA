import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllSorteos } from "../../api/sorteos.api";
import { getAllEvaluaciones } from "../../api/inscripcion.api";
import { getAllUsuarios } from "../../api/usuario.api";

export const ProcesosCard = ({ proceso }) => {
  const navigate = useNavigate();
  const [procesosIDs, setProcesosIDs] = useState([]);
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const getEvaluaciones = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllEvaluaciones(acces_token);
      console.log("evaluaciones", res.data);
      setEvaluaciones(res.data);
    };
    const getUsuarios = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const resU = await getAllUsuarios(acces_token);
      console.log("usuario", resU.data);
      setUsuarios(resU.data);
    };
    getEvaluaciones();
    getUsuarios();
  }, []);
  useEffect(() => {
    const getProcesosID = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getAllSorteos(acces_token);
      console.log("sorteos: ", res.data);
      const newListId = res.data.map((ins) => {
        return ins.round_inscription;
      });
      console.log("incrip list 11: ", newListId);
      setProcesosIDs(newListId);
    };
    getProcesosID();
  }, []);
  return (
    <tr>
      {/* //FALTA OBTENER EL NOMBRE DE AUTHOR Y DEL NOMBRE DE LA EVALUACION */}
      <th scope="row">1</th>
      {evaluaciones.map((evl) => {
        if (evl.id === proceso.evaluation)
          return <td key={evl.id}>{evl.evaluation}</td>;
      })}

      {usuarios.map((u) => {
        if (u.id === proceso.user_creator) return <td key={u.id}>{u.email}</td>;
      })}
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
      </td>
    </tr>
  );
};
