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

const ganadoresApi = axios.create({
  baseURL: `${baseBack}/api/raffle/rafflewinner/`,
});
export const getWinners = (acces_token, id) => {
  return ganadoresApi.get("/", {
    params: {
      raffle: id,
    },
    headers: {
      Authorization: acces_token,
    },
  });
};
// export const createSorteo = (acces_token, sorteo) => {
//   return sorteosApi.post(
//     "/",
//     { number_of_winners: sorteo.winners, round_inscription: sorteo.ronda },
//     {
//       headers: { Authorization: acces_token },
//     }
//   );
// };
// export const getSorteo = (acces_token, id) => {
//   return sorteosApi.get(`/${id}`, {
//     headers: {
//       Authorization: acces_token,
//     },
//   });
// };

// export const deleteSorteo = (acces_token, id) => {
//   return sorteosApi.delete(`/${id}/`, {
//     headers: {
//       Authorization: acces_token,
//     },
//   });
// };
