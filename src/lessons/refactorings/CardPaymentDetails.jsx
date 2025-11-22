export default function CardPaymentDetails({ card, setCard }) {
  return (
    <fieldset>
      <legend>Datos de tarjeta</legend>
      <input
        placeholder="Número"
        value={card.number}
        onChange={(e) => setCard({ ...card, number: e.target.value })}
        required
      />
      <input
        placeholder="Titular"
        value={card.name}
        onChange={(e) => setCard({ ...card, name: e.target.value })}
        required
      />
      <div style={{ display: "flex", gap: 8 }}>
        <input
          placeholder="CVV"
          value={card.cvv}
          onChange={(e) => setCard({ ...card, cvv: e.target.value })}
          required
        />
        <input
          placeholder="MM/AA"
          value={card.exp}
          onChange={(e) => setCard({ ...card, exp: e.target.value })}
          required
        />
      </div>
    </fieldset>
  );
}
