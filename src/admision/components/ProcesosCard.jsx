import { useNavigate } from "react-router-dom";

export const ProcesosCard = ({ proceso }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "red" }}
      onClick={() => {
        navigate(`/admin/procesos/${proceso.id}`);
      }}
    >
      <h1>{proceso.title}</h1>
      <p>{proceso.description}</p>
      <span>Incritos : 9</span>
      <span>Cerrado: false</span>
    </div>
  );
};
