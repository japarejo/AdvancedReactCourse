import React from 'react'
import { sliceBoxStyles, labelStyles, inputStyles } from './sliceStyles'

const PaymentContext = React.createContext()

export default function PaymentSlice({ children }) {
  const [payment, setPayment] = React.useState({ method: 'credit', notes: '' })
  const updatePayment = (field, value) =>
    setPayment((prev) => ({ ...prev, [field]: value }))

  return (
    <PaymentContext.Provider value={{ payment, updatePayment }}>
      <section style={sliceBoxStyles}>
        <h3>Metodo de pago</h3>
        {children}
      </section>
    </PaymentContext.Provider>
  )
}

PaymentSlice.Select = function Select({ field, label, options }) {
  const { payment, updatePayment } = React.useContext(PaymentContext)
  return (
    <label style={labelStyles}>
      <span>{label}</span>
      <select
        style={inputStyles}
        value={payment[field]}
        onChange={(e) => updatePayment(field, e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

PaymentSlice.Input = function Input({ field, label, placeholder }) {
  const { payment, updatePayment } = React.useContext(PaymentContext)
  return (
    <label style={labelStyles}>
      <span>{label}</span>
      <input
        style={inputStyles}
        placeholder={placeholder}
        value={payment[field]}
        onChange={(e) => updatePayment(field, e.target.value)}
      />
    </label>
  )
}
