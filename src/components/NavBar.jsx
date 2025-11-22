import { Link } from "react-router-dom";
import "./NavBar.css";

/**
 * Main navigation component for the application.
 * Contains links to all lessons and examples, organized by category using HTML details/summary elements.
 */
export default function NavBar() {
  /**
   * Handles the blur event on the details element to close the dropdown
   * when the user clicks outside of it.
   *
   * @param {React.FocusEvent} event - The focus event triggered on blur.
   */
  const handleDetailsBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      event.currentTarget.open = false;
    }
  };

  return (
    <nav className="nav">
      <Link to="/">Home</Link>

      <details className="nav-dropdown" onBlur={handleDetailsBlur}>
        <summary>Refactoring</summary>
        <div className="nav-dropdown__panel">
          <Link to="/lessons/refactorings/payment/start">Payment Start</Link>
          <Link to="/lessons/refactorings/payment/final">Payment Final</Link>
        </div>
      </details>

      <details className="nav-dropdown" onBlur={handleDetailsBlur}>
        <summary>Hooks y Contexto</summary>
        <div className="nav-dropdown__panel">
          <Link to="/lessons/hooksAndContext/useMemo">useMemo</Link>
          <Link to="/lessons/hooksAndContext/useCallback">useCallback</Link>
          <Link to="/lessons/hooksAndContext/starwars">
            Personajes Star Wars
          </Link>
          <Link to="/lessons/reactQuery/starwars">
            Personajes Star Wars con React Query
          </Link>
          <Link to="/lessons/hooksAndcontext/context">Ejemplo de contexto</Link>
          <Link to="/lessons/hooksAndcontext/reducer">Ejemplo de reducers</Link>
        </div>
      </details>

      <details className="nav-dropdown" onBlur={handleDetailsBlur}>
        <summary>Patrones</summary>
        <div className="nav-dropdown__panel">
          <Link to="/lessons/designPatterns/container-presentational">
            Container/Presentational
          </Link>
          <Link to="/lessons/designPatterns/slice">Slice modular</Link>
          <Link to="/lessons/designPatterns/renderProps">Render props</Link>
          <Link to="/lessons/designPatterns/composite-renderer">
            Composite Renderer
          </Link>
          <Link to="/lessons/designPatterns/composite-renderer/exercise">
            Composite Renderer (Ejercicio)
          </Link>
          <Link to="/lessons/designPatterns/headless-component">
            Headless Component
          </Link>
          <Link to="/lessons/designPatterns/compound-component">
            Compound Component
          </Link>
        </div>
      </details>

      <Link to="/about">About</Link>
    </nav>
  );
}
