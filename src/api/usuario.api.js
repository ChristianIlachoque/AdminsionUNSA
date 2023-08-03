import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
//const { acces_token } = useContext(AppContext);

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

export const getUsuario = (acces_token, id) => {
  return usuarioApi.get(`/${id}/`, {
    headers: {
      Authorization: acces_token,
    },
  });
};
export const updateUsuario = (acces_token, id, user) => {
  return usuarioApi.patch(
    `/${id}/`,
    { work: user.work },
    {
      headers: { Authorization: acces_token },
    }
  );
};
