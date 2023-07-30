import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SorteosForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  return (
    <>
      <h1>Sorteos form</h1>
      <form>
        <select {...register("ronda")}>
          <option>Ronda 1</option>
          <option>Ronda 2</option>
        </select>
        <input
          type="number"
          placeholder="Cantidad Ganadores"
          {...register("winners", { required: true })}
        />
        {errors.winners && <span>count winners is required</span>}
        <button>Save</button>
        <Link to="/admin/procesos">Cancelar</Link>
      </form>
    </>
  );
};
