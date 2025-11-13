import PersonalSlice from './PersonalSlice'
import AddressSlice from './AddressSlice'
import PaymentSlice from './PaymentSlice'
import { formStyles } from './sliceStyles'

function CheckoutForm({ children }) {
  return (
    <form className="checkout-form" style={formStyles}>
      {children}
    </form>
  )
}

CheckoutForm.Personal = PersonalSlice
CheckoutForm.Address = AddressSlice
CheckoutForm.Payment = PaymentSlice

export default CheckoutForm
