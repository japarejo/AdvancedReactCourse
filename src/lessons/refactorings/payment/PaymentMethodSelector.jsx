export default function PaymentMethodSelector({ method, onChange }) {
  return (
    <fieldset>
      <legend>Método de pago</legend>
      <label>
        <input
          type="radio"
          name="method"
          value="card"
          checked={method === 'card'}
          onChange={() => onChange('card')}
        />{' '}
        Tarjeta
      </label>{' '}
      <label>
        <input
          type="radio"
          name="method"
          value="applepay"
          checked={method === 'applepay'}
          onChange={() => onChange('applepay')}
        />{' '}
        Apple Pay
      </label>
    </fieldset>
  )
}

