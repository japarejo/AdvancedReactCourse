import JediListItem from "./JediListItem";

export default function JediList({ jedis, onCambiarLado, onEliminar }) {
  if (!jedis.length) {
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        El consejo está vacío. La Fuerza espera a nuevos aprendices.
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {jedis.map((jedi) => (
        <JediListItem
          key={jedi.id}
          jedi={jedi}
          onCambiarLado={onCambiarLado}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}
