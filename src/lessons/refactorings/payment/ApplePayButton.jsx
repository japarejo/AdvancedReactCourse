export default function ApplePayButton({ visible, onPay }) {
  if (!visible) return null
  return (
    <button type="button" onClick={onPay} style={{ background: 'black', color: 'white' }}>
      Pagar con  Apple Pay
    </button>
  )
}

