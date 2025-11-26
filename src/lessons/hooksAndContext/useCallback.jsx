import { useState, useCallback } from "react";
import React from "react";

const Boton = React.memo(({ onClick, label }) => {
  console.log(`Renderizando <Boton ${label}>`);
  return (
    <button onClick={onClick} style={{ marginRight: "0.5rem" }}>
      {label}
    </button>
  );
});

export default function EjemploUseCallback() {
  const [contador, setContador] = useState(0);
  const [valor, setValor] = useState(0);

  // La función 'incrementar' se mantiene estable entre renders:
  const incrementar = useCallback(() => {
    console.log("Incrementando contador");
    setContador((c) => c + 1);
  }, []);

  // Esta función cambia en cada render::
  const cambiarValor = () => {
    console.log("Incrementando valor");
    setValor((v) => v + 1);
  };

  console.log("Renderizando <EjemploUseCallback>");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Ejemplo de useCallback</h2>
      <p>Contador: {contador}</p>
      <p>Valor: {valor}</p>

      <Boton onClick={incrementar} label="Incrementar contador (memo)" />
      <Boton onClick={cambiarValor} label="Cambiar valor (sin memo)" />
    </div>
  );
}
