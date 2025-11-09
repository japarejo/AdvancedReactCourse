import { UserProvider } from "./UserContext";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import LoginPanel from "./LoginPanel";
import { useUser } from "./UserContext";

function PantallaContextoUsuario() {
  const { isAuthenticated } = useUser();
  return <Layout>{isAuthenticated ? <Dashboard /> : <LoginPanel />}</Layout>;
}

export default function EjemploContextoUsuario() {
  return (
    <UserProvider>
      <PantallaContextoUsuario />
    </UserProvider>
  );
}
