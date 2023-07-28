import { useForm } from "react-hook-form";

export const InscripcionCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    // await createInscripcion(idUser, isProceso)
    // falta navigate para ir proceso incripcion 2
    // nagivate("/docente/inscripcion")
  });
  return (
    <>
      {/* Se tiene que hacer una validación  para mostrar alguno de los 3*/}

      {/* COMPONENTE 1 - Formulario de Inscripcion - user no esta inscrito (idUser, idProceso)*/}
      <div>
        <h1>Incripcion Card</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre Completo"
            {...register("name", { required: true })}
          />
          {errors.name && <span>name is required</span>}
          <input
            type="text"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          {errors.email && <span>email is required</span>}
          <input
            type="text"
            placeholder="DNI"
            {...register("dni", { required: true })}
          />
          {errors.dni && <span>dni is required</span>}
          <input
            type="text"
            placeholder="Cargo o Trabajo"
            {...register("job", { required: true })}
          />
          {errors.job && <span>job is required</span>}
          <button>Inscribirse</button>
        </form>
      </div>

      {/* COMPONENTE 2 - Mensaje de espera - user inscrito (idUser, idProceso)*/}
      <div>
        <h1>Se ha Inscrito Correctamente</h1>
        <p>
          El sorteo será realizado el dd/mm/aaaa, los resultados podrán ser
          vistos el dd/mm/aaaa
        </p>
      </div>

      {/* COMPONENTE 3 - Resultados Credencial - user inscrito (idUser, idProceso)- proceso desactivado*/}
      <div>
        <h1>Fue seleccionado, Felicidades</h1>
        <p>Se le hará llegar un comunidado al correo</p>
      </div>
    </>
  );
};
