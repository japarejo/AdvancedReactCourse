import Header from "./Header";

// Contenedor común para las pantallas protegidas/públicas.
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
