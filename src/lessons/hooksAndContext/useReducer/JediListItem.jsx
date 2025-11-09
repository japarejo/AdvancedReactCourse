export default function JediListItem({ jedi, onCambiarLado, onEliminar }) {
  const fondo = jedi.ladoOscuro ? "#2b2b2b" : "#e6f0ff";
  const colorTexto = jedi.ladoOscuro ? "#fff" : "#000";

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: fondo,
        color: colorTexto,
        padding: "0.5rem 0.75rem",
        borderRadius: "6px",
        marginBottom: "0.5rem",
      }}
    >
      <span>
        <strong>{jedi.nombre}</strong> —{" "}
        {jedi.ladoOscuro ? "Lado Oscuro 🌑" : "Lado Luminoso ✨"}
      </span>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => onCambiarLado(jedi.id)}>Cambiar lado</button>
        <button onClick={() => onEliminar(jedi.id)}>❌</button>
      </div>
    </li>
  );
}
