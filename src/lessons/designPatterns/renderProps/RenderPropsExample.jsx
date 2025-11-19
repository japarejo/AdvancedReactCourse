import { useState, useCallback } from "react";

function MouseTracker({ label, render }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const updateBounds = useCallback((element) => {
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const width = Math.round(bounds.width);
    const height = Math.round(bounds.height);

    setPosition((prev) => {
      if (prev.width === width && prev.height === height) {
        return prev;
      }
      return { ...prev, width, height };
    });
  }, []);

  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    setPosition((prev) => ({
      ...prev,
      x: Math.max(0, Math.round(event.clientX - left)),
      y: Math.max(0, Math.round(event.clientY - top)),
      width: Math.round(width),
      height: Math.round(height),
    }));
  };

  if (typeof render !== "function") {
    console.error("MouseTracker espera una prop `render` que sea una función.");
    return null;
  }

  return (
    <article
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        padding: "1.5rem",
        background: "#fff",
        boxShadow: "0 15px 30px rgba(15, 23, 42, 0.08)",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p
        style={{
          color: "#4a5568",
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: ".15em",
          margin: 0,
        }}
      >
        {label}
      </p>
      <div
        ref={updateBounds}
        onMouseMove={handleMouseMove}
        style={{
          flex: 1,
          borderRadius: 10,
          border: "1px dashed #cbd5f5",
          position: "relative",
          cursor: "crosshair",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        {render(position)}
      </div>
    </article>
  );
}

function CoordinatesReadout({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontSize: 18,
        color: "#2d3748",
      }}
    >
      <p style={{ margin: 0 }}>El ratón está en:</p>
      <strong style={{ fontSize: 28 }}>
        ({x}px, {y}px)
      </strong>
      <p style={{ margin: 0, color: "#718096", fontSize: 14 }}>
        Mueve el cursor sobre el panel
      </p>
    </div>
  );
}

function PointerSpotlight({ x, y, width, height }) {
  const hasMoved = width > 0 && height > 0 && (x !== 0 || y !== 0);
  const horizontal = width ? Math.round((x / width) * 100) : 0;
  const vertical = height ? Math.round((y / height) * 100) : 0;

  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hasMoved
            ? `radial-gradient(circle at ${horizontal}% ${vertical}%, rgba(59, 130, 246, 0.25), transparent 70%)`
            : "linear-gradient(135deg, #f0f4ff, #e5edff)",
          transition: "background 120ms ease-out",
          pointerEvents: "none",
        }}
      />
      {hasMoved && (
        <div
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#2b6cb0",
            boxShadow: "0 0 25px rgba(37, 99, 235, 0.65)",
            transform: "translate(-50%, -50%)",
            left: x,
            top: y,
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: 16,
          bottom: 16,
          padding: ".5rem .75rem",
          borderRadius: 8,
          background: "rgba(15, 23, 42, 0.75)",
          color: "#f8fafc",
          fontSize: 14,
          pointerEvents: "none",
        }}
      >
        {hasMoved
          ? `${horizontal}% horizontal, ${vertical}% vertical`
          : "Explora el área con el puntero"}
      </div>
    </>
  );
}

export default function RenderPropsExample() {
  return (
    <section
      style={{
        padding: "2rem 1rem 3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <header style={{ maxWidth: 640 }}>
        <p
          style={{
            color: "#4a5568",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: ".15em",
            margin: 0,
          }}
        >
          Patrón Render Props
        </p>
        <h2 style={{ margin: "0.25rem 0" }}>
          Compartiendo lógica de seguimiento del cursor
        </h2>
        <p style={{ margin: 0, color: "#4a5568" }}>
          <code>MouseTracker</code> encapsula el estado del cursor y lo expone
          mediante una render prop. Dos consumidores diferentes reutilizan la
          misma lógica y definen su propia interfaz visual.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <MouseTracker
          label="Lectura directa"
          render={(position) => <CoordinatesReadout {...position} />}
        />

        <MouseTracker
          label="Resaltado visual"
          render={(position) => <PointerSpotlight {...position} />}
        />
      </div>
    </section>
  );
}
