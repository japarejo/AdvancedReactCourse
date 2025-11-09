import { useState } from "react";
import useFetch  from "./useFetch";

export default function ListaPersonajesStarWars() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(
    `https://swapi.dev/api/people/?page=${page}`
  );

  const personajes = data?.results ?? [];

  const handleNext = () => {
    if (data?.next) {
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (data?.previous && page > 1) {
      setPage((p) => p - 1);
    }
  };

  if (loading) {
    return <p>Cargando personajes de Star Wars...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Personajes de Star Wars</h2>
      <p>Página: {page}</p>

      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.url}>
            <strong>{personaje.name}</strong> —{" "}
            <span>
              Altura: {personaje.height} cm, Masa: {personaje.mass} kg
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={handlePrev} disabled={!data?.previous}>
          Anterior
        </button>
        <button onClick={handleNext} disabled={!data?.next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
