import axios from "axios";

const usuarioApi = axios.create({
  baseURL: "http://35.222.147.54:8000/api/user/",
});

export const getAllUsuarios = (acces_token) => {
  return usuarioApi.get("/", {
    headers: {
      Authorization: acces_token,
    },
  });
};
