// Filtros presentacionales: no guardan estado, solo notifican cambios.
export default function RosterFilters({
  sideFilter,
  onSideChange,
  onlyActive,
  onToggleOnlyActive,
  stats,
}) {
  return (
    <section
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "1rem",
        padding: "0.75rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#f8f8f8",
        color: "#222",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <label>
          <input
            type="radio"
            value="all"
            checked={sideFilter === "all"}
            onChange={(e) => onSideChange(e.target.value)}
          />{" "}
          Todos
        </label>
        <label>
          <input
            type="radio"
            value="rebels"
            checked={sideFilter === "rebels"}
            onChange={(e) => onSideChange(e.target.value)}
          />{" "}
          Rebeldes
        </label>
        <label>
          <input
            type="radio"
            value="empire"
            checked={sideFilter === "empire"}
            onChange={(e) => onSideChange(e.target.value)}
          />{" "}
          Imperio
        </label>
        <label>
          <input
            type="radio"
            value="neutral"
            checked={sideFilter === "neutral"}
            onChange={(e) => onSideChange(e.target.value)}
          />{" "}
          Neutral
        </label>
      </div>

      <label style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={onlyActive}
          onChange={onToggleOnlyActive}
        />
        Mostrar solo activos
      </label>

      <span style={{ marginLeft: "auto", color: "#444" }}>
        Total: {stats.total} | Activos: {stats.activos} | Visibles:{" "}
        {stats.visibles}
      </span>
    </section>
  );
}
