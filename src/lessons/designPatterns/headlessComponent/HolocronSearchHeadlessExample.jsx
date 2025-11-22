import { useHolocronSearch } from "./useHolocronSearch";
import HolocronSearchView from "./HolocronSearchView";
import HolocronSearchStats from "./HolocronSearchStats";

// Headless component:
// - Orquesta el hook de logica (useHolocronSearch) y decide que vista usar.
// - No impone estilos ni markup complejo; solo pasa props a componentes de UI.
// - Puede verse  como una manera idiomatica de usar hooks personalizados en componentes y aplicar  Container/Presentational
export default function HolocronSearchHeadlessExample() {
  const state = useHolocronSearch();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        maxWidth: "720px",
        margin: "0 auto",
        display: "grid",
        gap: "1rem",
      }}
    >
      <header>
        <h2>Headless Component: Busqueda de Holocrons</h2>
        <p style={{ color: "#1f2937" }}>
          La logica vive en el hook; esta capa solo compone vistas. Cambia las
          vistas sin tocar el estado ni los callbacks.
        </p>
      </header>

      <HolocronSearchView {...state} />
      <HolocronSearchStats {...state} />
    </div>
  );
}
