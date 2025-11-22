import { UserProvider } from "./UserContext";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import LoginPanel from "./LoginPanel";
import { useUser } from "./UserContext";

// Esta pantalla es el "router" mínimo: decide qué ver en función del contexto.
function PantallaContextoUsuario() {
  const { isAuthenticated } = useUser();
  return <Layout>{isAuthenticated ? <Dashboard /> : <LoginPanel />}</Layout>;
}

// Punto de entrada del ejemplo: envuelve todo con el provider para que
// cualquier componente pueda leer/actualizar al usuario sin prop drilling.
export default function EjemploContextoUsuario() {
  return (
    <UserProvider>
      <PantallaContextoUsuario />
    </UserProvider>
  );
}
