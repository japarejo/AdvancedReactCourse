import { useUser } from "./UserContext";

// Pantalla privada: consume el contexto para leer al usuario actual
// y para actualizar su "lado" sin prop drilling.
export default function Dashboard() {
  const { user, setForceSide: changeForceSide, setUser } = useUser();

  return (
    <section>
      <h3>Bienvenido, {user.name}</h3>
      <p>
        Esta es su area privada,{" "}
        <strong>
          {user.forceSide === "dark" ? "Lord" : "Maestro"} {user.role}
        </strong>
        . Aqui podria ver datos, informes, configuracion, etc.
      </p>
      <p>
        Lado de la Fuerza actual:{" "}
        <strong>
          {user.forceSide === "dark" ? "Lado Oscuro" : "Lado Luminoso"}
        </strong>
      </p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => changeForceSide("dark")}>
          Pasarse al Lado Oscuro
        </button>
        <button onClick={() => changeForceSide("light")}>
          Volver al Lado Luminoso
        </button>
        <button
          onClick={() => setUser({ ...user, edad: 30, planeta: "Tatooine" })}
        >
          Añadir información adicional
        </button>
      </div>
    </section>
  );
}
