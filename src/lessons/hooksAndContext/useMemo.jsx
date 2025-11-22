import { useMemo, useState } from "react";

/**
 * Demonstrates the usage of the `useMemo` hook to optimize expensive calculations.
 *
 * In this example, a Fibonacci calculation (simulated as expensive) is memoized
 * so that it only re-runs when the `numero` state changes, and not when
 * other unrelated state (like `contador`) updates.
 */
export default function EjemploUseMemo() {
  const [numero, setNumero] = useState(30);
  const [contador, setContador] = useState(0);

  /*
  
  🧠 Cálculo costoso simulado (por ejemplo, calcular un número de Fibonacci)

  La función fibonacci consume tiempo exponencial.
  
  Cambiar contador provoca un re-renderizado del componente, pero no debería recalcular el Fibonacci, ya que el número no ha cambiado.
  
  Gracias a useMemo, el cálculo solo se repite cuando cambia numero.
  
  Si eliminas useMemo, verás cómo el cálculo se ejecuta incluso al modificar el contador (innecesariamente).
  
  Este ejemplo muestra empíricamente la utilidad de useMemo..
  */
  const resultado = useMemo(() => {
    console.log("Calculando resultado costoso...");
    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fibonacci(numero);
  }, [numero]); // solo recalcular cuando cambia 'numero'

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h3>Ejemplo de useMemo con cálculo costoso</h3>

      <p>
        <strong>Número:</strong> {numero}
      </p>
      <p>
        <strong>Resultado (Fibonacci):</strong> {resultado}
      </p>

      <button onClick={() => setNumero(numero + 1)}>Incrementar número</button>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador ({contador})
      </button>
    </div>
  );
}
