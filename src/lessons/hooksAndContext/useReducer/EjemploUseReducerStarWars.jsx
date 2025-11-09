import { useReducer } from "react";
import { jedisReducer, estadoInicial } from "./jedisReducer";
import JediForm from "./JediForm";
import JediList from "./JediList";

export default function EjemploUseReducerStarWars() {
  const [jedis, dispatch] = useReducer(jedisReducer, estadoInicial);

  const agregarJedi = (nombre) => {
    dispatch({ type: "agregar", payload: { nombre } });
  };

  const cambiarLado = (id) => {
    dispatch({ type: "cambiarLado", payload: { id } });
  };

  const eliminarJedi = (id) => {
    dispatch({ type: "eliminar", payload: { id } });
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        maxWidth: "520px",
        margin: "auto",
      }}
    >
      <h2>🧘‍♂️ Consejo Jedi (useReducer)</h2>
      <p style={{ color: "#555" }}>
        Ejemplo de gestión de estado compleja con useReducer en el universo Star Wars.
      </p>

      <JediForm onAgregar={agregarJedi} />

      <JediList
        jedis={jedis}
        onCambiarLado={cambiarLado}
        onEliminar={eliminarJedi}
      />
    </div>
  );
}
