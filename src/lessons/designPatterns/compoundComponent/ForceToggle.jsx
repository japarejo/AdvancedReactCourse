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

function Image() {
  const { isDark } = useForceToggleContext();
  const src = isDark
    ? "data:image/jpeg;base64,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"
    : "https://lumiere-a.akamaihd.net/v1/images/image_5c51d8fe.jpeg";
  return (
    <>
      <img src={src} />
    </>
  );
}

function Customizer({ children }) {
  return <>{children}</>;
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
ForceToggle.Image = Image;
ForceToggle.Customizer = Customizer;

export default ForceToggle;
