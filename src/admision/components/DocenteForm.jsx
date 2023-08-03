import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useForm } from "react-hook-form";
import { getUsuario, updateUsuario } from "../../api/usuario.api";
import { useNavigate } from "react-router-dom";

export const DocenteForm = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const getDataUsuario = async () => {
      const acces_token = JSON.parse(localStorage.getItem("token"));
      const res = await getUsuario(acces_token, user.id);
      console.log(res.data);
      setValue("work", res.data.work);
    };
    getDataUsuario();
  }, []);
  const onSubmit = handleSubmit(async (data) => {
    const acces_token = JSON.parse(localStorage.getItem("token"));
    console.log("data user work: ", data);
    
    await updateUsuario(acces_token, user.id, data);

    console.log("se guardaorn cambio")
    navigate("/docente/inscripcion")
  });
  return (
    <>
      <h1>Docente form page</h1>
      <h3>Form</h3>
      <form onSubmit={onSubmit}>
        <input value={user.email} disabled />
        <input value={user.user_type} disabled />
        <input value="49392939" disabled />
        <textarea {...register("work", { required: true })}></textarea>
        {errors.work && <span>work is required</span>}
        <button>Guardar</button>
      </form>
    </>
  );
};
