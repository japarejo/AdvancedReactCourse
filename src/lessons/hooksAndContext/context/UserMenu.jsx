import { useUser } from "./UserContext";

// Cabecera compacta que refleja el estado global del usuario
// y permite cerrar sesión desde cualquier parte del layout.
export default function UserMenu() {
  const { user, isAuthenticated, logout } = useUser();

  if (!isAuthenticated) {
    return <span style={{ fontStyle: "italic" }}>No conectado</span>;
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span>
        Conectado como: <strong>{user.name}</strong> ({user.role})
      </span>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
