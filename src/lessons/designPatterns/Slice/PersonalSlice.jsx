import React from 'react'
import { sliceBoxStyles, labelStyles, inputStyles } from './sliceStyles'

const PersonalContext = React.createContext()

export default function PersonalSlice({ children }) {
  const [data, setData] = React.useState({ name: '', email: '' })
  const updateField = (field, value) => setData({ ...data, [field]: value })

  return (
    <PersonalContext.Provider value={{ data, updateField }}>
      <section style={sliceBoxStyles}>
        <h3>Datos personales</h3>
        {children}
      </section>
    </PersonalContext.Provider>
  )
}

PersonalSlice.Input = function Input({ field, label }) {
  const { data, updateField } = React.useContext(PersonalContext)
  return (
    <label style={labelStyles}>
      <span>{label}</span>
      <input
        style={inputStyles}
        value={data[field]}
        onChange={(e) => updateField(field, e.target.value)}
      />
    </label>
  )
}
