import CheckoutForm from './CheckoutForm'

export default function CheckoutSliceExample() {
  return (
    <section
      style={{
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <header>
        <p
          style={{
            fontSize: 13,
            color: '#4a5568',
            textTransform: 'uppercase',
            letterSpacing: '.15em',
          }}
        >
          Patron Slice
        </p>
        <h2 style={{ margin: 0 }}>Checkout modular por areas</h2>
        <p style={{ marginTop: 8 }}>
          Cada seccion se comporta como una slice con su propio contexto, lo que
          mantiene el formulario compuesto y escalable.
        </p>
      </header>

      <CheckoutForm>
        <CheckoutForm.Personal>
          <CheckoutForm.Personal.Input field="name" label="Nombre" />
          <CheckoutForm.Personal.Input field="email" label="Email" />
        </CheckoutForm.Personal>

        <CheckoutForm.Address>
          <CheckoutForm.Address.Input field="city" label="Ciudad" />
          <CheckoutForm.Address.Input field="country" label="Pais" />
        </CheckoutForm.Address>

        <CheckoutForm.Payment>
          <CheckoutForm.Payment.Select
            field="method"
            label="Metodo de pago"
            options={[
              { value: 'credit', label: 'Tarjeta credito' },
              { value: 'paypal', label: 'PayPal' },
              { value: 'transfer', label: 'Transferencia' },
            ]}
          />
          <CheckoutForm.Payment.Input
            field="notes"
            label="Notas o referencia"
            placeholder="Numero de tarjeta, correo de PayPal, etc."
          />
        </CheckoutForm.Payment>
      </CheckoutForm>
    </section>
  )
}
