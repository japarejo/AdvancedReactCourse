// Tarjeta presentacional: solo formatea los datos recibidos.
export default function RosterCard({ miembro }) {
  const fondo =
    miembro.lado === "rebels"
      ? "#e1f0ff"
      : miembro.lado === "empire"
      ? "#2c2c2c"
      : "#f5f2d0";
  const colorTexto = miembro.lado === "empire" ? "#fff" : "#000";

  const badge =
    miembro.lado === "rebels"
      ? "Rebeldes"
      : miembro.lado === "empire"
      ? "Imperio"
      : "Neutral";

  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "0.75rem",
        background: fondo,
        color: colorTexto,
        boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        display: "grid",
        gap: "0.35rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: 0 }}>{miembro.nombre}</h4>
        <span
          style={{
            fontSize: "0.8rem",
            padding: "0.2rem 0.45rem",
            borderRadius: "999px",
            border: "1px solid rgba(0,0,0,0.08)",
            background: "rgba(255,255,255,0.25)",
          }}
        >
          {badge}
        </span>
      </div>
      <p style={{ margin: 0, fontWeight: "bold" }}>{miembro.rol}</p>
      <p style={{ margin: 0, color: colorTexto === "#fff" ? "#ddd" : "#444" }}>
        Estado: {miembro.activo ? "Disponible para la mision" : "Fuera de servicio"}
      </p>
    </article>
  );
}
