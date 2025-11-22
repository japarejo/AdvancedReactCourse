// Segunda vista de ejemplo: solo consume los mismos datos del hook headless.
// Puede activarse o desactivarse sin tocar la logica de negocio.
export default function HolocronSearchStats({ query, results, loading }) {
  const status = loading
    ? "Buscando..."
    : results.length
    ? "Resultados listos"
    : "Sin coincidencias";

  return (
    <aside
      style={{
        border: "1px dashed #d1d5db",
        borderRadius: "10px",
        padding: "0.75rem",
        background: "#fff",
        color: "#0f172a",
      }}
    >
      <p style={{ margin: 0, fontWeight: 600 }}>Panel de estado</p>
      <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
        Query actual: <code>{query || "(vacío)"}</code>
      </p>
      <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
        Resultados: {results.length}
      </p>
      <p style={{ margin: "0.25rem 0", color: "#111827" }}>{status}</p>
    </aside>
  );
}
