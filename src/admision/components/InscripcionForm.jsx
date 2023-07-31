import { useForm } from "react-hook-form";
import {
  createInscripcion,
  getAllEvaluaciones,
} from "../../api/inscripcionUser.api";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MjM3MTM0LCJpYXQiOjE2OTA2ODUxMzQsImp0aSI6IjNiZGUxNWQ0NDYxZDRkMTNiYWZmZDI5NmE2M2JhMmU4IiwidXNlcl9pZCI6IjI4ZDNjMzZhLWZlNzQtNDE5Zi05ZmJmLWM3ZWNkOTczZDRiYiJ9.MshqTJOn5DhhIk4Fw4bOQsNbaq7xffV01-Jc2gSjGH0";
export const InscripcionForm = ({ proceso }) => {
  const { user, acces_token } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      <h1>InscripcionForm</h1>
      <div>
        <h1>Incripcion Card</h1>
        <form onSubmit={onSubmit}>
          <select {...register("ronda", { required: true })}>
            <option value={proceso.id}>{proceso.evaluation.name}</option>
          </select>
          <input value={user.email} readOnly />
          <input value={user.user_type === "TEACHER" && "DOCENTE"} readOnly />
          <textarea
            value={user.work ? user.work : "No tiene"}
            readOnly
          ></textarea>
          <button>Inscribirse</button>
        </form>
        <Link to="/docente/perfil">Editar Perfil</Link>
        <br />
        <Link to="/docente/inscripcion">Cancelar</Link>
      </div>
    </>
  );
};
