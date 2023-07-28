import { useForm } from "react-hook-form";
import {
  createProceso,
  deleteProceso,
  getProceso,
  updateProceso,
} from "../../api/procesos.api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const ProcesosForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    async function loadProceso() {
      if (params.id) {
        const res = await getProceso(params.id);
        console.log(res);
        setValue("type", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadProceso();
  });
  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProceso(params.id, data);
    } else {
      await createProceso(data);
    }

    navigate("/admin/procesos");
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Tipo Proceso"
          {...register("type", { required: true })}
        />
        {errors.type && <span>type is required</span>}
        <input
          type="text"
          placeholder="Año"
          {...register("year", { required: true })}
        />
        {errors.year && <span>year is required</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button>Save</button>
      </form>
      <Link to="/admin/procesos">Cancelar</Link>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteProceso(params.id);
              navigate("/admin/procesos");
            }
          }}
        >
          Delete
        </button>
      )}
    </>
  );
};
