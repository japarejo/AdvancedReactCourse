import { useReducer } from "react";
import { jedisReducer, estadoInicial } from "./jedisReducer";
import JediForm from "./JediForm";
import JediList from "./JediList";

// Ejemplo completo de useReducer:
// - estadoInicial: array de jedis
// - reducer: funciones puras que modifican el estado segun action.type
// - dispatch: se pasa a hijos para que envien acciones sin mutar el estado
export default function EjemploUseReducerStarWars() {
  const [jedis, dispatch] = useReducer(jedisReducer, estadoInicial);

  // Action creators sencillos para facilitar la construcción de eventos { type, payload }
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
      <h2>Consejo Jedi (useReducer)</h2>
      <p style={{ color: "#555" }}>
        Ejemplo de gestion de estado con useReducer en el universo Star Wars.
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
