import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav style={{ marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
      <Link to="/">Home</Link>
      <details>
        <summary>Refactoring</summary>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
          <Link to="/lessons/refactorings/payment/start">Payment Start</Link>
          <Link to="/lessons/refactorings/payment/final">Payment Final</Link>
        </div>
      </details>
      
      <details>
        <summary>Hooks y Contexto</summary>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
          <Link to="/lessons/hooksAndContext/useMemo">useMemo</Link>
          <Link to="/lessons/hooks-and-context/starwars">Personajes Star Wars</Link>
        </div>
      </details>
      <Link to="/about">About</Link>
    </nav>
  )
}
