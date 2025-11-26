import JediListItem from "./JediListItem";

// Lista declarativa que recibe estado y callbacks (acciones) desde el padre.
export default function JediList({
  jedis,
  onCambiarLado,
  onEliminar,
  rebautizar,
}) {
  if (!jedis.length) {
    return (
      <p style={{ textAlign: "center", color: "#666" }}>
        El consejo esta vacio. La Fuerza espera a nuevos aprendices.
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
          onRebautizar={rebautizar}
        />
      ))}
    </ul>
  );
}
