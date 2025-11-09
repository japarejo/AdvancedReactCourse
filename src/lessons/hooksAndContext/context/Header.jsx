import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header
      style={{
        padding: "0.5rem 1rem",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#b9b6b6ff",
      }}
    >
      <h2 style={{ margin: 0 }}>Panel de la Academia Jedi</h2>
      <UserMenu />
    </header>
  );
}
