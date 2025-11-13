import React from 'react'
import { sliceBoxStyles, labelStyles, inputStyles } from './sliceStyles'

const AddressContext = React.createContext()

export default function AddressSlice({ children }) {
  const [address, setAddress] = React.useState({ city: '', country: '' })
  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      <section style={sliceBoxStyles}>
        <h3>Direccion de envio</h3>
        {children}
      </section>
    </AddressContext.Provider>
  )
}

AddressSlice.Input = function Input({ field, label }) {
  const { address, setAddress } = React.useContext(AddressContext)
  return (
    <label style={labelStyles}>
      <span>{label}</span>
      <input
        style={inputStyles}
        value={address[field]}
        onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
      />
    </label>
  )
}
