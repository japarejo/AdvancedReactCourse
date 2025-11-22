import { useState } from "react";

// Formulario controlado que emite una accion de agregar via callback del padre.
export default function JediForm({ onAgregar }) {
  const [nombre, setNombre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nombre.trim()) return;
    onAgregar(nombre);
    setNombre("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: "1rem 0", display: "flex", gap: "0.5rem" }}
    >
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nuevo aprendiz Jedi..."
        style={{ flex: 1, padding: "0.25rem" }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
