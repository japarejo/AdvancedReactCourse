import { useState } from "react";
import SummaryOfItems from "./SummaryOfItems.jsx";
import CardPaymentDetails from "./CardPaymentDetails.jsx";
import PaymentMethodSelector from "./PaymentMethodSelector.jsx";
// Página: Estado inicial (componente monolítico)
export default function PaymentRefactorStart() {
  const [method, setMethod] = useState("card");
  const [card, setCard] = useState({ number: "", name: "", cvv: "", exp: "" });
  const [email, setEmail] = useState("");
  const items = [
    { id: 1, name: "Curso React Avanzado", price: 49 },
    { id: 2, name: "Patrones de Componentes", price: 29 },
  ];
  const total = items.reduce((acc, it) => acc + it.price, 0);

  function handleSubmit(e) {
    e.preventDefault();
    // Toda la lógica mezclada en un único componente
    const payload = { method, card, email, items, total };
    // Simulación envío
    alert(`Pago enviado (monolítico):\n${JSON.stringify(payload, null, 2)}`);
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h2>Refactorings · Pago (Estado Inicial)</h2>
      <p style={{ color: "#666" }}>
        Este ejemplo ilustra un único componente que mezcla UI, estado y lógica.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <PaymentMethodSelector method={method} setMethod={setMethod} />
        <label>
          Email
          <input
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {method === "card" && (
          <CardPaymentDetails card={card} setCard={setCard} />
        )}

        <SummaryOfItems items={items} total={total} />

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}
