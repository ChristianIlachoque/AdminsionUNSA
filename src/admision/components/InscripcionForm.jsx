import { useForm } from "react-hook-form";
import {
  createInscripcion,
  getAllEvaluaciones,
} from "../../api/inscripcionUser.api";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsuario } from "../../api/usuario.api";
// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MjM3MTM0LCJpYXQiOjE2OTA2ODUxMzQsImp0aSI6IjNiZGUxNWQ0NDYxZDRkMTNiYWZmZDI5NmE2M2JhMmU4IiwidXNlcl9pZCI6IjI4ZDNjMzZhLWZlNzQtNDE5Zi05ZmJmLWM3ZWNkOTczZDRiYiJ9.MshqTJOn5DhhIk4Fw4bOQsNbaq7xffV01-Jc2gSjGH0";
export const InscripcionForm = ({ proceso }) => {
  const { user } = useContext(AppContext);
  const [formUser, setFormUser] = useState({
    email: "",
    user_type: "",
    work: "",
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    const getDataUsuario = async () => {
      const res = await getUsuario(acces_token, user.id);
      setFormUser({
        email: res.data.email,
        user_type: res.data.user_type,
        work: res.data.work,
      });
    };
    getDataUsuario();
  }, []);
  const onSubmit = handleSubmit(async (data) => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    console.log("data to send: ", data);
    await createInscripcion(acces_token, data);
    // await createInscripcion(idUser, isProceso)
    // falta navigate para ir proceso incripcion 2
    navigate("/docente/inscripcion-proceso2/");
  });
  return (
    <>
      <div>
        <form
          onSubmit={onSubmit}
          style={{
            margin: "20px 150px",
            background: "rgb(217,217,217)",
            borderRadius: "25px",
          }}
        >
          <br></br>
          <h1 style={{ margin: "0px 0px", textAlign: "center" }}>
            Formulario de inscripcion
          </h1>
          <br></br>
          <div className="form-group" style={{ margin: "0px 30px" }}>
            <label>Proceso que pertenece</label>
            <br></br>
            <select {...register("ronda", { required: true })}>
              <option value={proceso.id}>{proceso.evaluation.name}</option>
            </select>
            <br></br>
            <br></br>
            <label>Correo del postulante</label>
            <br></br>
            <input value={formUser.email} readOnly />
            <br></br>
            <br></br>
            <label>Rol del postulante</label>
            <br></br>
            <input
              value={formUser.user_type === "TEACHER" && "DOCENTE"}
              readOnly
            />
            <br></br>
            <br></br>
            <label>Trabajo del postulante</label>
            <br></br>
            <textarea
              value={formUser.work ? formUser.work : "No tiene"}
              readOnly
            ></textarea>
            <br></br>
            <br></br>
            <div style={{ margin: "0px 150px" }}>
              <button className="btn btn-primary">Inscribirse</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/docente/perfil" className="btn btn-primary">
                Editar Perfil
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/docente/inscripcion" className="btn btn-danger">
                Cancelar
              </Link>
            </div>
            <br></br>
          </div>
        </form>
      </div>
    </>
  );
};
