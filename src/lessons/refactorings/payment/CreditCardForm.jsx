export default function CreditCardForm({ card, onChange, visible }) {
  if (!visible) return null
  return (
    <fieldset>
      <legend>Datos de tarjeta</legend>
      <input
        placeholder="Número"
        value={card.number}
        onChange={(e) => onChange({ ...card, number: e.target.value })}
        required
      />
      <input
        placeholder="Titular"
        value={card.name}
        onChange={(e) => onChange({ ...card, name: e.target.value })}
        required
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          placeholder="CVV"
          value={card.cvv}
          onChange={(e) => onChange({ ...card, cvv: e.target.value })}
          required
        />
        <input
          placeholder="MM/AA"
          value={card.exp}
          onChange={(e) => onChange({ ...card, exp: e.target.value })}
          required
        />
      </div>
    </fieldset>
  )
}

