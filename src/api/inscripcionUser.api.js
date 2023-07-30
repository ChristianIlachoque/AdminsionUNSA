import axios from "axios";

const inscripcionApi = axios.create({
  baseURL: "http://35.222.147.54:8000/api/roundinscription/userinscription/",
});
const evaluacionesApi = axios.create({
  baseURL: "http://35.222.147.54:8000/api/admisionprocess/evaluation",
});
const rondasApi = axios.create({
  baseURL: "http://35.222.147.54:8000/api/roundinscription/roundinscription/",
});

export const createInscripcion = (acces_token, inscripcion) => {
  return inscripcionApi.post(
    "/",
    { round_inscription: inscripcion.ronda },
    {
      headers: {
        Authorization: acces_token,
      },
    }
  );
};

export const getAllInscripciones = (acces_token) => {
  return inscripcionApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};

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
  return rondasApi.delete(`/${id}`, {
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
export const getAllEvaluaciones = (acces_token) => {
  return evaluacionesApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};
