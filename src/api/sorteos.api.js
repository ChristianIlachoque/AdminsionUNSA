import axios from "axios";
import { baseBack } from "./baseBack";

const evaluacionesApi = axios.create({
  baseURL: `${baseBack}/api/admisionprocess/evaluation`,
});
const rondasApi = axios.create({
  baseURL: `${baseBack}/api/roundinscription/roundinscription/`,
});

const sorteosApi = axios.create({
  baseURL: `${baseBack}/api/raffle/raffle/`,
});

export const getAllSorteos = (acces_token) => {
  return sorteosApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};
export const createSorteo = (acces_token, sorteo) => {
  return sorteosApi.post(
    "/",
    { number_of_winners: sorteo.winners, round_inscription: sorteo.ronda },
    {
      headers: { Authorization: acces_token },
    }
  );
};
export const getSorteo = (acces_token, id) => {
  return sorteosApi.get(`/${id}`, {
    headers: {
      Authorization: acces_token,
    },
  });
};

export const deleteSorteo = (acces_token, id) => {
  return sorteosApi.delete(`/${id}/`, {
    headers: {
      Authorization: acces_token,
    },
  });
};
