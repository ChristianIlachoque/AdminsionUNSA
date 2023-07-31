import { useForm } from "react-hook-form";
import {
  createProceso,
  deleteProceso,
  getProceso,
  updateProceso,
} from "../../api/procesos.api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  createRonda,
  deleteRonda,
  getAllEvaluaciones,
  getRonda,
  updateRonda,
  updateRondaPartial,
} from "../../api/inscripcion.api";
import { AppContext } from "../../context/AppContext";

// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTYyODIyLCJpYXQiOjE2OTA2MTA4MjIsImp0aSI6IjliNDU2N2U1YzdlNzQ2ZjE5ZmE2ZGVmZThmM2YxZmVhIiwidXNlcl9pZCI6IjFkYjcyMzczLTY0NTAtNDU3OC1iY2E4LTk3YzQzMTE0NTc3MSJ9.XMi2CvjrCQ5eDFHArETTvoRPC8jdMfQ7YJ0V9L7pemo";

export const ProcesosForm = () => {
  const { acces_token } = useContext(AppContext);
  const [evaluaciones, setEvaluaciones] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const params = useParams();
  console.log("v params: ", params.id);
  useEffect(() => {
    async function loadProceso() {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const resE = await getAllEvaluaciones(acces_token);
      console.log("evals: ", resE.data);
      setEvaluaciones(resE.data);

      if (params.id) {
        const res = await getRonda(acces_token, params.id);
        console.log("info 1 eval:", res.data);
        setValue("evaluacion", res.data.evaluation.id);
        setValue("active", res.data.is_active);
        //setValue("description", res.data.description);
      }
    }
    loadProceso();
  }, []);
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    if (params.id) {
      console.log("update: ", data);
      await updateRondaPartial(acces_token, params.id, data);
    } else {
      console.log("create: ", data);
      await createRonda(acces_token, data);
    }

    navigate("/admin/procesos");
  });
  return (
    // <>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Tipo Proceso"
    //       {...register("type", { required: true })}
    //     />
    //     {errors.type && <span>type is required</span>}
    //     <input
    //       type="text"
    //       placeholder="Año"
    //       {...register("year", { required: true })}
    //     />
    //     {errors.year && <span>year is required</span>}
    //     <textarea
    //       rows="3"
    //       placeholder="Descripcion"
    //       {...register("description", { required: true })}
    //     ></textarea>
    //     {errors.description && <span>description is required</span>}
    //     <button>Save</button>
    //   </form>
    //   <Link to="/admin/procesos">Cancelar</Link>
    //   {params.id && (
    //     <button
    //       onClick={async () => {
    //         const accepted = window.confirm("are you sure?");
    //         if (accepted) {
    //           await deleteProceso(params.id);
    //           navigate("/admin/procesos");
    //         }
    //       }}
    //     >
    //       Delete
    //     </button>
    //   )}
    // </>
    <>
      <form onSubmit={onSubmit}>
        <select {...register("evaluacion", { required: true })}>
          {evaluaciones.map((evaluacion) => (
            <option value={evaluacion.id} key={evaluacion.id}>
              {evaluacion.name}
            </option>
          ))}
        </select>
        {errors.evaluacion && <span>evaluacion is required</span>}
        {params.id && <input {...register("active")} type="checkbox" />}
        <button className="btn btn-success">Guardar</button>
      </form>

      {params.id && (
        <button
          className="btn btn-danger"
          onClick={async () => {
            const acces_token = JSON.parse(localStorage.getItem("token"));
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteRonda(acces_token, params.id);
              navigate("/admin/procesos");
            }
          }}
        >
          Delete
        </button>
      )}
      <Link className="btn btn-secondary" to="/admin/procesos">
        Cancelar
      </Link>
    </>
  );
};
