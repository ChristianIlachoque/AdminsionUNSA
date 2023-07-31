import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const DocenteForm = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <h1>Docente form page</h1>
      <h3>Form</h3>
      <form>
        <input value={user.email} />
        <button>Actualizar info</button>
      </form>
    </>
  );
};
