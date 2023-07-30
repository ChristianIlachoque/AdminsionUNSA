import { Link, useAsyncError, useLocation } from "react-router-dom";
import { InscripcionForm } from "./InscripcionForm";
import { useContext, useEffect, useState } from "react";
import { getAllInscripciones } from "../../api/inscripcionUser.api";
import { AppContext } from "../../context/AppContext";
import { InscripcionEspera } from "./InscripcionEspera";
import { InscripcionResultado } from "./InscripcionResultado";
// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MjM3MTM0LCJpYXQiOjE2OTA2ODUxMzQsImp0aSI6IjNiZGUxNWQ0NDYxZDRkMTNiYWZmZDI5NmE2M2JhMmU4IiwidXNlcl9pZCI6IjI4ZDNjMzZhLWZlNzQtNDE5Zi05ZmJmLWM3ZWNkOTczZDRiYiJ9.MshqTJOn5DhhIk4Fw4bOQsNbaq7xffV01-Jc2gSjGH0";
export const InscripcionCard = () => {
  const { user } = useContext(AppContext);
  const { state } = useLocation();
  // const { acces_token } = useContext(AppContext);

  console.log("proceso en Card: ", state);

  return (
    <>
      {/* Se tiene que hacer una validación  para mostrar alguno de los 3*/}

      {/* COMPONENTE 1 - Formulario de Inscripcion - user no esta inscrito (idUser, idProceso)*/}

      <InscripcionForm proceso={state} />

      {/* COMPONENTE 2 - Mensaje de espera - user inscrito (idUser, idProceso)*/}
      {/* <InscripcionEspera /> */}
      {/* COMPONENTE 3 - Resultados Credencial - user inscrito (idUser, idProceso)- proceso desactivado*/}
      {/* <InscripcionResultado /> */}
    </>
  );
};
