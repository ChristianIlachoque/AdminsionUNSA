import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [acces_token, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const login = () => {
    const dato = localStorage.getItem("user");
    console.log("verificando login: ", dato);
    //setUser(JSON.parse(localStorage.getItem("user")));
    //localStorage.setItem("user", JSON.stringify(infoUser));
    navigate("/admin");
  };
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    navigate("/auth/login");
  };
  return (
    <AppContext.Provider
      value={{ user, setUser, login, logout, acces_token, setAccessToken }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
