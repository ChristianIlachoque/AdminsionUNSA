import { InscripcionList } from "../../../components/InscripcionList";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";

export const DocentePage = () => {
  const { logout } = useContext(AppContext);
  return (
    <>
      <h1>Docente PAGE</h1>
      <InscripcionList />
      <button onClick={logout}>Logout</button>
    </>
  );
};
