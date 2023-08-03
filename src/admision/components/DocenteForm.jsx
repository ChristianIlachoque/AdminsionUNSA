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
    <form
          onSubmit={onSubmit}
          style={{
            margin: "50px 350px",
            background: "rgb(217,217,217)",
            borderRadius: "25px",
          }}
        >
      <br></br>
      {/*<h3 style={{textAlign: 'center'}}>Formulario para editar perfil</h3>
      <form onSubmit={onSubmit}>
        <input value={user.email} disabled />
        <input value={user.user_type} disabled />
        <input value="49392939" disabled />
        <textarea {...register("work", { required: true })}></textarea>
        {errors.work && <span>work is required</span>}
        <button>Guardar</button>
      </form>
        */}
      <div className="form-group" style={{ margin: "0px 30px",
                                          textAlign:'center'}}>
            <h3 style={{textAlign: 'center'}}>Perfil del docente</h3>
            <br></br>
            <label>Correo del postulante</label>
            <br></br>
            <input value={user.email} disabled />
            <br></br>
            <br></br>
            <label>Rol del postulante</label>
            <br></br>
            <input value={user.user_type} disabled />
            <br></br>
            <br></br>
            <label>DNI</label>
            <br></br>
            <input value="49392939" disabled />
            <br></br>
            <br></br>
            <label>Trabajo</label>
            <br></br>
            <textarea {...register("work", { required: true })}
                      style={{width:'300px'}}></textarea>
            {errors.work && <span>work is required</span>}
            <br></br>
            <br></br>
            <div style={{ margin: "0px 125px" }}>
              <button className="btn btn-primary">Guardar</button>
            </div>
            <br></br>
          </div>
          </form>
    </>
  );
};
