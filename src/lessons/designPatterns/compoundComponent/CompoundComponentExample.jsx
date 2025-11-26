import ForceToggle from "./ForceToggle";

// Ejemplo didactico de Compound Components:
// - El estado y callbacks viven en <ForceToggle>.
// - Los subcomponentes acceden al contexto interno sin prop drilling.
// - El consumidor decide que piezas renderizar y en que orden.
export default function CompoundComponentExample() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        maxWidth: "720px",
        margin: "0 auto",
        display: "grid",
        gap: "1rem",
      }}
    >
      <header>
        <h2>Compound Components (Star Wars)</h2>
        <p style={{ color: "#1f2937" }}>
          Usa las piezas de <code>ForceToggle</code> para armar tu propia UI sin
          pasar props manualmente.
        </p>
      </header>

      <ForceToggle defaultSide="light">
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "1rem",
            background: "#f8fafc",
            display: "grid",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ForceToggle.Icon />
            <ForceToggle.Title />
          </div>
          <ForceToggle.Image />
          <ForceToggle.Badge />
          <ForceToggle.Stats />
          <ForceToggle.Message
            dark="El miedo lleva a la ira, la ira al odio."
            light="La Fuerza estara contigo. Siempre."
          />

          <ForceToggle.Content side="dark">
            <p style={{ margin: 0, color: "#111827" }}>
              Consejo Sith: Deja que tu pasion te guie, pero vigila a tu
              aprendiz.
            </p>
          </ForceToggle.Content>

          <ForceToggle.Content side="light">
            <p style={{ margin: 0, color: "#111827" }}>
              Consejo Jedi: La paciencia es una virtud, joven padawan.
            </p>
          </ForceToggle.Content>

          <ForceToggle.Switch />
          <ForceToggle.Actions />
        </div>
      </ForceToggle>

      <ForceToggle>
        <ForceToggle.Title>Yoda</ForceToggle.Title>
        <ForceToggle.Image />
        <ForceToggle.Switch />
        <ForceToggle.Customizer>
          <div
            style={{ marginTop: "1rem", fontStyle: "italic", color: "#374151" }}
          >
            "Hazlo o no lo hagas, pero no lo intentes."
          </div>
        </ForceToggle.Customizer>
      </ForceToggle>
    </div>
  );
}
