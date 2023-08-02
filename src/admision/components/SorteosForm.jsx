import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { createSorteo, deleteSorteo, getSorteo } from "../../api/sorteos.api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { getAllRondas } from "../../api/inscripcion.api";

// const acces_token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2MTYyODIyLCJpYXQiOjE2OTA2MTA4MjIsImp0aSI6IjliNDU2N2U1YzdlNzQ2ZjE5ZmE2ZGVmZThmM2YxZmVhIiwidXNlcl9pZCI6IjFkYjcyMzczLTY0NTAtNDU3OC1iY2E4LTk3YzQzMTE0NTc3MSJ9.XMi2CvjrCQ5eDFHArETTvoRPC8jdMfQ7YJ0V9L7pemo";
export const SorteosForm = () => {
  const { acces_token } = useContext(AppContext);

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("sorteo: ", state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {}, []);
  const onSubmit = handleSubmit(async (data) => {
    console.log("data to send: ", data);
    await createSorteo(acces_token, data).catch((error) => {
      window.alert(
        "No hay inscritos o el numero de ganadores excede al numero de inscritos"
      );
      console.log("muchos ganadores, no hay gente: ", error);
    });

    navigate("/admin/procesos");
  });

  return (
    <>
      <form onSubmit={onSubmit}
            style={{margin: '100px 200px',
                    background: 'rgb(217,217,217)',
                    borderRadius: '25px'}}>
        <br></br>
        <h2 style={{margin: '0px 0px',
                  textAlign: 'center'}}>Crear un nuevo sorteo</h2>
        <br></br>  
        <div className="form-group" style={{margin: '0px 30px'}}>
          <label >Proceso que pertenece</label>          
          <select {...register("ronda", { required: true })}>
            <option value={state.id}>{state.evaluation.name}</option>
          </select>
          <br></br><br></br>
          <label >Numero de ganadores</label>
          <br></br>
          <input
            type="number"
            placeholder="Cantidad Ganadores"
            {...register("winners", { required: true })}
          />
          {errors.winners && <span>count winners is required</span>}
          <br></br><br></br>
        </div>
        <div className="form-group" style={{margin: '0px 250px'}}>
        <button className="btn btn-primary">Save</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/admin/procesos">
          <button className="btn btn-danger">
            Cancelar
          </button>
        </Link>
        </div>
        <br></br>
        {/* {params.id && (
          <button
            onClick={async () => {
              const accepted = window.confirm("are you sure?");
              if (accepted) {
                await deleteSorteo(acces_token, params.id);
                navigate("/admin/sorteos");
                console.log("eliminado sorteo", params.id);
              }
            }}
          >
            Delete f
          </button>
        )} */}
      </form>
    </>
  );
};
