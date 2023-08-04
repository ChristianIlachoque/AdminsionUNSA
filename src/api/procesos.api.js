import axios from "axios";
import { baseBack } from "./baseBack";

const inscripcionApi = axios.create({
  baseURL: `${baseBack}/api/roundinscription/roundinscription`,
});
const procesosApi = axios.create({
  baseURL: "http://localhost:7000/tasks/api/v1/tasks/",
});

export const getAllProcesos = () => {
  return procesosApi.get("/");
};
export const getProceso = (id) => {
  return procesosApi.get(`/${id}/`);
};
export const createProceso = (proceso) => {
  let newTask = {
    title: proceso.type,
    description: proceso.description,
  };
  return procesosApi.post("/", newTask);
};
export const deleteProceso = (id) => {
  return procesosApi.delete(`/${id}`);
};
export const updateProceso = (id, proceso) => {
  let newTask = {
    title: proceso.type,
    description: proceso.description,
  };
  return procesosApi.put(`/${id}/`, newTask);
};
// PARA RONDAS DE INSCRIPCION
export const getAllInscripciones = (acces_token) => {
  return inscripcionApi.get("/", {
    headers: {
      Authorization: `Bearer ${acces_token}`,
    },
  });
};

export const createInscripcion = (inscripcion) => {
  return inscripcionApi.post("/", inscripcion);
};
