import { useState } from "react";
import { useUser } from "./UserContext";

export default function LoginPanel() {
  const { login } = useUser();
  const [name, setName] = useState("Luke Skywalker");
  const [role, setRole] = useState("Jedi");

  function handleSubmit(e) {
    e.preventDefault();
    login(name, role);
  }

  return (
    <section
      style={{
        maxWidth: "320px",
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3>Iniciar sesión</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.75rem", marginTop: "0.5rem" }}
      >
        <label style={{ display: "grid", gap: "0.25rem" }}>
          <span>Nombre</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "0.25rem" }}
          />
        </label>

        <label style={{ display: "grid", gap: "0.25rem" }}>
          <span>Rol</span>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: "0.25rem" }}
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
