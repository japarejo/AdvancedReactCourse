// Vista por defecto: formulario y lista simple.
// Podria reemplazarse por otra vista (por ejemplo, tarjetas) sin tocar la logica.
export default function HolocronSearchView({ query, setQuery, loading, results }) {
  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "1rem",
        background: "#f8fafc",
        display: "grid",
        gap: "0.75rem",
      }}
    >
      <label style={{ display: "grid", gap: "0.35rem" }}>
        <span style={{ fontWeight: 600, color: "#111827" }}>
          Buscar holocrons
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: Korriban, Coruscant, Revan..."
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />
      </label>

      {loading && (
        <p style={{ margin: 0, color: "#6b7280" }}>
          Escaneando archivos de la Orden Jedi...
        </p>
      )}

      {!loading && results.length === 0 && (
        <p style={{ margin: 0, color: "#6b7280" }}>
          No se encontraron holocrons con ese termino.
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
        {results.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "0.65rem 0.75rem",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              background: "#fff",
              color: "#0f172a",
            }}
          >
            <strong>{item.titulo}</strong>
            <div style={{ color: "#4b5563" }}>Alineacion: {item.alineacion}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
