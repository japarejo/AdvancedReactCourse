import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://swapi.dev/api/people/";

export default function ListaPersonajesSW() {
  const [page, setPage] = useState(1);

  // Hook principal de React Query
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["people", page], // la clave depende de la página actual
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}?page=${page}`);
      if (!res.ok) {
        throw new Error("Error al obtener los personajes");
      }
      return res.json();
    },
    keepPreviousData: true, // mantiene los datos de la página anterior al cambiar de página
    staleTime: 1000 * 600,   // 10 minutos sin refetch automático
  });

  // Datos de la API
  const personajes = data?.results ?? [];
  const tieneAnterior = Boolean(data?.previous);
  const tieneSiguiente = Boolean(data?.next);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Personajes de Star Wars (React Query)</h2>
      <p>Página: {page}</p>

      {/* Estado de carga */}
      {isLoading && <p>Cargando personajes...</p>}
      {isError && <p>Error: {error.message}</p>}

      {/* Lista de resultados */}
      {!isLoading && !isError && (
        <>
          <ul>
            {personajes.map((personaje) => (
              <li key={personaje.url}>
                <strong>{personaje.name}</strong> — Altura: {personaje.height} cm
              </li>
            ))}
          </ul>

          {/* Controles de paginación */}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={!tieneAnterior}
            >
              ◀ Anterior
            </button>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!tieneSiguiente}
            >
              Siguiente ▶
            </button>
          </div>

          {/* Estado de actualización (refetch en curso) */}
          {isFetching && (
            <p style={{ marginTop: "0.5rem", color: "gray" }}>
              Actualizando datos…
            </p>
          )}
        </>
      )}
    </div>
  );
}
