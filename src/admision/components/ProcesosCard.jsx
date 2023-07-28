import { useNavigate } from "react-router-dom";

export const ProcesosCard = ({ proceso }) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/admin/procesos/${proceso.id}`);
      }}
    >
      <th scope="row">1</th>
      <td>{proceso.title}</td>
      <td>{proceso.description}</td>
      <td>@mdo</td>
    </tr>
  );
};
