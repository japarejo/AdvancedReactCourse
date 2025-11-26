/* eslint-disable react-refresh/only-export-components */
// Registro de renderers por tipo de nodo.
const registry = {
  briefing: BriefingCard,
  fleet: FleetCard,
  squad: SquadCard,
  pilot: PilotBadge,
  task: TaskItem,
  intel: IntelNote,
  support: SupportCharacters,
};

// API publica: recibe un nodo, busca su renderer y lo pinta con renderChildren.
export function renderNode(node) {
  const Renderer = registry[node.type] ?? UnknownNode;
  return (
    <Renderer key={node.id} node={node}>
      {renderChildren(node.children)}
    </Renderer>
  );
}

// Permite a cada renderer decidir donde renderizar a sus hijos.
export function renderChildren(children) {
  if (!children || !children.length) return null;
  return children.map((child) => renderNode(child));
}

function BriefingCard({ node, children }) {
  return (
    <article style={cardStyle("#f1f5ff")}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={eyebrow}>Briefing</p>
          <h3 style={{ margin: 0 }}>{node.titulo}</h3>
        </div>
        <span style={badgeStyle("#3b82f6", "#e8f0ff")}>
          Comandante: {node.comandante}
        </span>
      </header>
      <p style={{ color: "#334155" }}>{node.descripcion}</p>
      {children && <div style={{ marginTop: "0.75rem" }}>{children}</div>}
    </article>
  );
}

function FleetCard({ node }) {
  return (
    <div style={cardStyle("#eef7ff")}>
      <p style={eyebrow}>Flota</p>
      <strong>{node.nombre}</strong>
      <p style={{ margin: "0.25rem 0", color: "#1f2937" }}>
        Naves disponibles: {node.naves}
      </p>
      <span style={badgeStyle("#2563eb", "#dbeafe")}>{node.estado}</span>
    </div>
  );
}

function SquadCard({ node, children }) {
  return (
    <article style={cardStyle("#fff7ed")}>
      <p style={eyebrow}>Escuadron</p>
      <h4 style={{ margin: "0 0 0.25rem 0" }}>{node.nombre}</h4>
      <p style={{ margin: 0, color: "#1f2937" }}>
        Lider: {node.lider} - Objetivo: {node.objetivo}
      </p>
      <div style={{ marginTop: "0.5rem", display: "grid", gap: "0.5rem" }}>
        {children}
      </div>
    </article>
  );
}

function PilotBadge({ node }) {
  return (
    <div style={{ ...cardStyle("#0f172a", "#e2e8f0"), color: "#e2e8f0" }}>
      <p style={{ ...eyebrow, color: "#94a3b8" }}>Piloto</p>
      <strong>{node.nombre}</strong>
      <p style={{ margin: "0.25rem 0" }}>Nave: {node.nave}</p>
      <span style={badgeStyle("#22c55e", "rgba(34,197,94,0.15)")}>
        {node.estado}
      </span>
    </div>
  );
}

function TaskItem({ node }) {
  const color = node.prioridad === "critica" ? "#b91c1c" : "#0f172a";
  return (
    <div style={{ ...cardStyle("#f8fafc"), borderLeft: `4px solid ${color}` }}>
      <p style={eyebrow}>Tarea</p>
      <p style={{ margin: 0, color: "#1f2937" }}>{node.descripcion}</p>
      <span style={badgeStyle(color, "rgba(15,23,42,0.08)")}>
        Prioridad: {node.prioridad}
      </span>
    </div>
  );
}

function IntelNote({ node }) {
  return (
    <div style={cardStyle("#f0f9ff")}>
      <p style={eyebrow}>Inteligencia</p>
      <p style={{ margin: 0, color: "#ff0000ff" }}>
        Fuente: <strong>{node.fuente}</strong>
      </p>
      <p style={{ margin: "0.35rem 0 0 0", color: "#c82e03ff" }}>
        {node.detalle}
      </p>
    </div>
  );
}

function SupportCharacters({ node, children }) {
  return (
    <div style={cardStyle("#e0f2fe")}>
      <p style={eyebrow}>Personajes de apoyo</p>
      <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#1e293b" }}>
        {node.recursos.map((char) => (
          <li key={char}>{char}</li>
        ))}
      </ul>
      {children && <div style={{ marginTop: "0.75rem" }}>{children}</div>}
    </div>
  );
}

function UnknownNode({ node }) {
  return (
    <div style={cardStyle("#f5a5a5ff")}>
      <p style={eyebrow}>Tipo no registrado</p>
      <code>{node.type}</code>
    </div>
  );
}

// Pequeños helpers de estilo para mantener consistencia y no distraer del patron.
const cardStyle = (bg = "#fff", borderColor = "#e2e8f0") => ({
  border: `1px solid ${borderColor}`,
  borderRadius: "12px",
  padding: "0.75rem",
  background: bg,
  boxShadow: "0 1px 3px rgba(15,23,42,0.08)",
  color: "#0f172a",
});

const badgeStyle = (color, bg) => ({
  display: "inline-block",
  padding: "0.2rem 0.6rem",
  borderRadius: "999px",
  color,
  background: bg,
  fontSize: "0.85rem",
  border: `1px solid ${color}22`,
});

const eyebrow = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: "0.75rem",
  margin: 0,
  color: "#64748b",
};
