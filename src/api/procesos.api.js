import axios from "axios";

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
