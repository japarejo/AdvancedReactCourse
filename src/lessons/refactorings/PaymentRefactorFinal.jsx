import Payment from './payment/Payment.jsx'

// Página: Estado final (componentes modulares)
export default function PaymentRefactorFinal() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h2>Refactorings · Pago (Estado Final)</h2>
      <p style={{ color: '#666' }}>
        El flujo de pago se compone de subcomponentes pequeños, enfocados y reutilizables.
      </p>
      <Payment />
    </div>
  )
}

