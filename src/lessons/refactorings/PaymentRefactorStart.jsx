import { useState } from 'react'

// Página: Estado inicial (componente monolítico)
export default function PaymentRefactorStart() {
  const [method, setMethod] = useState('card')
  const [card, setCard] = useState({ number: '', name: '', cvv: '', exp: '' })
  const [email, setEmail] = useState('')
  const items = [
    { id: 1, name: 'Curso React Avanzado', price: 49 },
    { id: 2, name: 'Patrones de Componentes', price: 29 },
  ]
  const total = items.reduce((acc, it) => acc + it.price, 0)

  function handleSubmit(e) {
    e.preventDefault()
    // Toda la lógica mezclada en un único componente
    const payload = { method, card, email, items, total }
    // Simulación envío
    alert(`Pago enviado (monolítico):\n${JSON.stringify(payload, null, 2)}`)
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h2>Refactorings · Pago (Estado Inicial)</h2>
      <p style={{ color: '#666' }}>
        Este ejemplo ilustra un único componente que mezcla UI, estado y lógica.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <fieldset>
          <legend>Método de pago</legend>
          <label>
            <input
              type="radio"
              name="method"
              value="card"
              checked={method === 'card'}
              onChange={() => setMethod('card')}
            />{' '}
            Tarjeta
          </label>{' '}
          <label>
            <input
              type="radio"
              name="method"
              value="applepay"
              checked={method === 'applepay'}
              onChange={() => setMethod('applepay')}
            />{' '}
            Apple Pay
          </label>
        </fieldset>

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

        {method === 'card' && (
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
            <div style={{ display: 'flex', gap: 8 }}>
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
        )}

        <section>
          <h3>Resumen</h3>
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                {it.name} — ${it.price}
              </li>
            ))}
          </ul>
          <strong>Total: ${total}</strong>
        </section>

        <button type="submit">Pagar</button>
      </form>
    </div>
  )
}

