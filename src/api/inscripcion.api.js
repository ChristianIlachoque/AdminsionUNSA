import axios from "axios";
import { baseBack } from "./baseBack";

const evaluacionesApi = axios.create({
  baseURL: `${baseBack}/api/admisionprocess/evaluation/`,
});
const rondasApi = axios.create({
  baseURL: `${baseBack}/api/roundinscription/roundinscription`,
});

export const getAllRondas = (acces_token) => {
  return rondasApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};

export const getRonda = (acces_token, id) => {
  return rondasApi.get(`/${id}`, {
    headers: {
      Authorization: acces_token,
    },
  });
};
export const createRonda = (acces_token, ronda) => {
  return rondasApi.post(
    "/",
    { evaluation: ronda.evaluacion },
    {
      headers: { Authorization: acces_token },
    }
  );
};

export const deleteRonda = (acces_token, id) => {
  return rondasApi.delete(`/${id}/`, {
    headers: {
      Authorization: acces_token,
    },
  });
};

export const updateRonda = (acces_token, id, ronda) => {
  let newRonda = {
    evaluation: ronda.evaluacion,
    is_active: ronda.active,
  };
  return rondasApi.put(`/${id}/`, newRonda, {
    headers: {
      Authorization: acces_token,
    },
  });
};

export const updateRondaPartial = (acces_token, id, ronda) => {
  return rondasApi.patch(
    `/${id}/`,
    { is_active: ronda.active },
    { headers: { Authorization: acces_token } }
  );
};
export const getAllEvaluaciones = (acces_token) => {
  return evaluacionesApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};
// export const getProceso = (idProceso, idUsuario) => {
//   return procesosApi.get(`/${idProceso}/${idUsuario}/`);
// };

// export const createInscripcion = (idProceso, idUsuario) => {
//   const newInsc = {
//     idProceso,
//     idUsuario,
//   };
//   return procesosApi.post("/", newInsc);
//   //return inscripcioApi.post(/, newInscipcion)
// };
