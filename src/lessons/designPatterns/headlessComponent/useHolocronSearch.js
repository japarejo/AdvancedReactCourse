import { useEffect, useMemo, useState } from "react";

// Hook "headless": contiene logica de negocio sin opinion de UI.
// - Simula busqueda de holocrons (artefactos de la Fuerza) con filtro de texto y estado de carga.
// - El componente en realidad es un hook que devuelve solo datos y callbacks; la UI queda a criterio del consumidor.
export function useHolocronSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // Dataset fijo para la demo; en un caso real vendria de API/BD.
  const catalog = useMemo(
    () => [
      { id: 1, titulo: "Holocron Jedi de Coruscant", alineacion: "luz" },
      { id: 2, titulo: "Holocron Sith de Korriban", alineacion: "oscuridad" },
      { id: 3, titulo: "Holocron Gris de Bendu", alineacion: "equilibrio" },
      { id: 4, titulo: "Holocron de Ahsoka Tano", alineacion: "luz" },
      { id: 5, titulo: "Holocron de Darth Revan", alineacion: "oscuridad" },
    ],
    []
  );

  // Efecto simulado de fetch: tarda 400ms al cambiar query.
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      const q = query.toLowerCase().trim();
      const filtered = catalog.filter((item) =>
        item.titulo.toLowerCase().includes(q)
      );
      setResults(filtered);
      setLoading(false);
    }, 400);
    return () => clearTimeout(id);
  }, [query, catalog]);

  return {
    query,
    setQuery,
    loading,
    results,
  };
}
