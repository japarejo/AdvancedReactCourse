import { missionPlan } from "./data";
import { renderNode } from "./renderers";

// Ejercicio guiado:
// 1) Registra un renderer "SupportCard" en renderers.jsx con un estilo propio.
// 2) Haz que ese renderer llame a renderChildren para permitir sub-tareas internas.
// 4) Comprueba que UnknownNode ya no se usa para ese tipo.
export default function CompositeRendererExercise() {
  const missionPlanExercise = [
    ...missionPlan,
    {
      id: "support-1",
      type: "support", // TODO: implementar renderer para este tipo.
      nombre: "Equipo de soporte astromecánico",
      recursos: ["R2-D2", "R5-D4", "Droide de protocolos"],
      children: [
        {
          id: "task-support-1",
          type: "task",
          descripcion:
            "Mantener los escudos auxiliares durante la corrida final",
          prioridad: "alta",
        },
      ],
    },
  ];

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
        <h2>Composite Renderer Exercise (Star Wars)</h2>
        <p style={{ color: "#c5c5c5ff" }}>
          Implementa un nuevo tipo de nodo para practicar el registro dinamico
          de renderers y la composicion de hijos.
        </p>
        <ol style={{ color: "#eaeaeaff", marginTop: "0.5rem" }}>
          <li>
            Lee el comentario de los pasos en la cabecera de este archivo.
          </li>
          <li>
            Abre <code>renderers.jsx</code> y añade el renderer para "support".
          </li>
          <li>
            Verifica que el nodo <code>support-1</code> deja de mostrarse como
            "Tipo no registrado".
          </li>
        </ol>
      </header>

      <section>{missionPlanExercise.map((node) => renderNode(node))}</section>
    </div>
  );
}
