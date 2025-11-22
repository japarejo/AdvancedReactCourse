import { createContext, useContext, useMemo, useState } from "react";

// Context interno para compartir estado entre los subcomponentes compuestos.
const ForceToggleContext = createContext(null);

// Hook de uso interno con error descriptivo si falta el provider.
function useForceToggleContext() {
  const ctx = useContext(ForceToggleContext);
  if (!ctx) {
    throw new Error("ForceToggle.* debe usarse dentro de <ForceToggle>");
  }
  return ctx;
}

// Componente compuesto raiz: gestiona el estado y expone sus piezas.
function ForceToggle({ defaultSide = "light", children }) {
  const [side, setSide] = useState(defaultSide);
  const [switches, setSwitches] = useState(0);
  const isDark = side === "dark";

  const value = useMemo(
    () => ({
      side,
      isDark,
      switches,
      toggle: () => {
        setSide((prev) => (prev === "dark" ? "light" : "dark"));
        setSwitches((n) => n + 1);
      },
      setDark: () => {
        setSide("dark");
        setSwitches((n) => n + 1);
      },
      setLight: () => {
        setSide("light");
        setSwitches((n) => n + 1);
      },
    }),
    [side, isDark, switches]
  );

  return (
    <ForceToggleContext.Provider value={value}>
      {children}
    </ForceToggleContext.Provider>
  );
}

// Subcomponente: muestra un titulo segun el lado.
function Title() {
  const { side } = useForceToggleContext();
  const text =
    side === "dark"
      ? "Sirves al Lado Oscuro"
      : "Guardian la paz como Jedi en el Lado Luminoso";
  return <h3 style={{ margin: 0, color: "#0f172a" }}>{text}</h3>;
}

// Subcomponente: switch visual que llama al toggle.
function Switch() {
  const { isDark, toggle } = useForceToggleContext();
  return (
    <button
      onClick={toggle}
      style={{
        border: "1px solid #d1d5db",
        background: isDark ? "#111827" : "#e0f2fe",
        color: isDark ? "#f8fafc" : "#0f172a",
        padding: "0.5rem 0.75rem",
        borderRadius: "999px",
        cursor: "pointer",
      }}
    >
      {isDark ? "Volver a la Luz" : "Probar el Lado Oscuro"}
    </button>
  );
}

// Subcomponente: muestra un badge con el lado actual.
function Badge() {
  const { isDark, side } = useForceToggleContext();
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        background: isDark ? "#1f2937" : "#c7d2fe",
        color: isDark ? "#e5e7eb" : "#0f172a",
        border: isDark ? "1px solid #374151" : "1px solid #94a3b8",
      }}
    >
      Lado actual: {side === "dark" ? "Oscuro" : "Luminoso"}
    </span>
  );
}

// Subcomponente: icono tematico segun el lado.
function Icon() {
  const { isDark } = useForceToggleContext();
  const symbol = isDark ? "🌑" : "🌟";
  return (
    <span aria-label="lado de la fuerza" style={{ fontSize: "1.5rem" }}>
      {symbol}
    </span>
  );
}

// Subcomponente: render condicional declarativo.
function Content({ side, children }) {
  const ctx = useForceToggleContext();
  if (ctx.side !== side) return null;
  return <>{children}</>;
}

// Subcomponente: muestra estadisticas de cambios.
function Stats() {
  const { switches, side } = useForceToggleContext();
  return (
    <div style={{ color: "#0f172a", fontSize: "0.9rem" }}>
      Cambios de lado: <strong>{switches}</strong> | Estado:{" "}
      {side === "dark" ? "Oscuro" : "Luminoso"}
    </div>
  );
}

// Subcomponente: contenido condicional segun lado.
function Message({ dark, light }) {
  const { isDark } = useForceToggleContext();
  return (
    <p style={{ margin: "0.35rem 0", color: "#111827" }}>
      {isDark ? dark : light}
    </p>
  );
}

// Subcomponente extra: botones directos de accion.
function Actions() {
  const { setDark, setLight } = useForceToggleContext();
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button
        onClick={setDark}
        style={{
          padding: "0.4rem 0.6rem",
          background: "#111827",
          color: "#f8fafc",
          borderRadius: "8px",
          border: "1px solid #1f2937",
        }}
      >
        Jurar lealtad a los Sith
      </button>
      <button
        onClick={setLight}
        style={{
          padding: "0.4rem 0.6rem",
          background: "#e0f2fe",
          color: "#0f172a",
          borderRadius: "8px",
          border: "1px solid #bae6fd",
        }}
      >
        Seguir el Codigo Jedi
      </button>
    </div>
  );
}

// Asignamos subcomponentes como propiedades para la API compuesta.
ForceToggle.Title = Title;
ForceToggle.Switch = Switch;
ForceToggle.Badge = Badge;
ForceToggle.Icon = Icon;
ForceToggle.Content = Content;
ForceToggle.Stats = Stats;
ForceToggle.Message = Message;
ForceToggle.Actions = Actions;

export default ForceToggle;
