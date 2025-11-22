import { missionPlan } from "./data";
import { renderNode } from "./renderers";

// Ejemplo didactico del Composite Renderer Pattern:
// - Los datos son un arbol (plan de mision en Star Wars)
// - Cada nodo tiene un "type" y la funcion renderNode delega en el renderer correspondiente.
// - Los renderers pueden llamar a renderChildren para pintar sus hijos.
export default function CompositeRendererExample() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        maxWidth: "960px",
        margin: "0 auto",
        display: "grid",
        gap: "1rem",
      }}
    >
      <header>
        <h2>Composite Renderer Pattern (Star Wars)</h2>
        <p style={{ color: "#b7b5b5ff" }}>
          Mismo arbol de datos, renderers especializados por tipo de nodo.
          Anadir un nuevo tipo es tan simple como registrar un renderer.
        </p>
      </header>

      <section>{missionPlan.map((node) => renderNode(node))}</section>
    </div>
  );
}
