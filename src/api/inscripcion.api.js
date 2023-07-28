import axios from "axios";

const procesosApi = axios.create({
  baseURL: "http://localhost:7000/tasks/api/v1/tasks/",
});

export const getAllProcesos = () => {
  // se tiene que filtrar por proceso: terminado o no
  return procesosApi.get("/");
};

export const getAllIncripsciones = () => {
  return procesosApi.get("/")
}
export const getProceso = (idProceso, idUsuario) => {
  return procesosApi.get(`/${idProceso}/${idUsuario}/`);
};


export const createInscripcion = (idProceso, idUsuario) => {
  const newInsc = {
    idProceso,
    idUsuario
  }
  return procesosApi.post("/", newInsc)
  //return inscripcioApi.post(/, newInscipcion)
}
