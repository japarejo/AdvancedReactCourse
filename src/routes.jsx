import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PaymentRefactorStart from './lessons/refactorings/PaymentRefactorStart.jsx'
import PaymentRefactorFinal from './lessons/refactorings/PaymentRefactorFinal.jsx'
import EjemploUseMemo from './lessons/hooksAndContext/useMemo.jsx'
import ListaPersonajesStarWars from './lessons/hooksAndContext/customHooks/ListaPersonajesStarwars.jsx'
import ListaPersonajesSW from './lessons/hooksAndContext/reactQuery/ListaPersonajesWSRQ.jsx'
import EjemploContextoUsuario from './lessons/hooksAndContext/context/EjemploContextoUsuario.jsx'
import EjemploUseCallback from './lessons/hooksAndContext/useCallback.jsx'
import EjemploUseReducerStarWars from './lessons/hooksAndContext/useReducer/EjemploUseReducerStarWars.jsx'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />      
      
      <Route path="/lessons/refactorings/payment/start" element={<PaymentRefactorStart />} />
      <Route path="/lessons/refactorings/payment/final" element={<PaymentRefactorFinal />} />
      
      <Route path="/lessons/hooksAndContext/useMemo" element={<EjemploUseMemo />} />
      <Route path="/lessons/hooksAndContext/useCallback" element={<EjemploUseCallback />} />
      <Route path="/lessons/hooksAndcontext/starwars" element={<ListaPersonajesStarWars />} />      
      <Route path="/lessons/reactQuery/starwars" element={<ListaPersonajesSW />} />
      <Route path="/lessons/hooksAndcontext/context" element={<EjemploContextoUsuario />} />      
      <Route path="/lessons/hooksAndcontext/reducer" element={<EjemploUseReducerStarWars />} />      
      <Route path="*" element={<p style={{ color: 'tomato' }}>Not found</p>} />
    </Routes>
  )
}
