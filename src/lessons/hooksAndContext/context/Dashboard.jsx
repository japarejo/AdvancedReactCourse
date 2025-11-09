import { useUser } from "./UserContext";

export default function Dashboard() {
  const { user, setForceSide } = useUser();

  return (
    <section>
      <h3>Bienvenido, {user.name}</h3>
      <p>
        Esta es su área privada, Maestro {user.role}. Aquí podría ver datos,
        informes, configuración, etc.
      </p>
      <p>
        Lado de la Fuerza actual: <strong>{user.forceSide === 'dark' ? 'Lado Oscuro' : 'Lado Luminoso'}</strong>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setForceSide('dark')}>Pasarse al Lado Oscuro</button>
        <button onClick={() => setForceSide('light')}>Volver al Lado Luminoso</button>
      </div>
    </section>
  );
}
