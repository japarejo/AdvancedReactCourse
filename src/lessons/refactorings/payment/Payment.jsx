import { useMemo, useState } from 'react'
import PaymentMethodSelector from './PaymentMethodSelector.jsx'
import CreditCardForm from './CreditCardForm.jsx'
import ApplePayButton from './ApplePayButton.jsx'
import OrderSummary from './OrderSummary.jsx'
import PlaceOrderButton from './PlaceOrderButton.jsx'

export default function Payment() {
  const [method, setMethod] = useState('card')
  const [email, setEmail] = useState('')
  const [card, setCard] = useState({ number: '', name: '', cvv: '', exp: '' })
  const items = [
    { id: 1, name: 'Curso React Avanzado', price: 49 },
    { id: 2, name: 'Patrones de Componentes', price: 29 },
  ]
  const total = useMemo(() => items.reduce((a, it) => a + it.price, 0), [items])

  function handleSubmit(e) {
    e.preventDefault()
    const payload = { method, card, email, items, total }
    alert(`Pago enviado (modular):\n${JSON.stringify(payload, null, 2)}`)
  }

  function handleApplePay() {
    const payload = { method: 'applepay', email, items, total }
    alert(`Pay (modular):\n${JSON.stringify(payload, null, 2)}`)
  }

  const isCardInvalid =
    method === 'card' && (!card.number || !card.name || !card.cvv || !card.exp)

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
      <PaymentMethodSelector method={method} onChange={setMethod} />

      <label>
        Email: 
        <input
          type="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <CreditCardForm visible={method === 'card'} card={card} onChange={setCard} />
      <ApplePayButton visible={method === 'applepay'} onPay={handleApplePay} />

      <OrderSummary items={items} total={total} />
      <PlaceOrderButton disabled={(method === 'card' && isCardInvalid) || method === 'applepay'} />
    </form>
  )
}

