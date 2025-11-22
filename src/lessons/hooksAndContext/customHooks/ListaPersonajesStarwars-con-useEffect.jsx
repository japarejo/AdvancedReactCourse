import { useState, useEffect } from "react";
export default function ListaPersonajesStarWars() {
  const [page, setPage] = useState(1);
  const [showMass, setShowMass] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://swapi.dev/api/people/?page=${page}`;
    console.log("Fetch URL:", url);
    let cancelado = false;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then((data) => {
        if (!cancelado) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log("Error al obtener datos:", err);
      })
      .finally(() => {
        console.log("Finalizado el fetch");
      });
    return () => (cancelado = true);
  }, [page]);

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

  const toggleShowMass = () => {
    setShowMass((prev) => !prev);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Personajes de Star Wars</h2>
      <p>Página: {page}</p>

      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.url}>
            <strong>{personaje.name}</strong> —{" "}
            <span>Altura: {personaje.height} cm</span>
            {showMass && <span> — Masa: {personaje.mass} kg</span>}
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
        <button onClick={toggleShowMass}>
          {showMass ? "Ocultar peso" : "Mostrar peso"}
        </button>
      </div>
    </div>
  );
}
