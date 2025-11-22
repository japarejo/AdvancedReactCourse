import RosterCard from "./RosterCard";

// Lista presentacional; muestra un mensaje si no hay datos.
export default function RosterList({ roster }) {
  if (!roster.length) {
    return (
      <p style={{ textAlign: "center", color: "#777", marginTop: "1rem" }}>
        No hay tripulacion que coincida con los filtros. La Fuerza esta en silencio.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "0.75rem",
      }}
    >
      {roster.map((item) => (
        <RosterCard key={item.id} miembro={item} />
      ))}
    </div>
  );
}
