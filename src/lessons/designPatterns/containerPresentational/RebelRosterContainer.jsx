import { useMemo, useState } from "react";
import RebelRosterView from "./RebelRosterView";

// Datos fijos solo para la demo (podrian venir de una API real)
const rosterInicial = [
  {
    id: 1,
    nombre: "Leia Organa",
    rol: "General",
    lado: "rebels",
    activo: true,
  },
  { id: 2, nombre: "Han Solo", rol: "Capitan", lado: "rebels", activo: false },
  {
    id: 3,
    nombre: "Luke Skywalker",
    rol: "Maestro Jedi",
    lado: "rebels",
    activo: true,
  },
  { id: 4, nombre: "Darth Vader", rol: "Sith", lado: "empire", activo: true },
  {
    id: 5,
    nombre: "Grand Moff Tarkin",
    rol: "Oficial",
    lado: "empire",
    activo: false,
  },
  { id: 6, nombre: "Cara Dune", rol: "Marshal", lado: "rebels", activo: true },
  {
    id: 7,
    nombre: "Din Djarin",
    rol: "Cazarrecompensas",
    lado: "neutral",
    activo: true,
  },
];

// Container: se encarga de estado, derivar datos y pasar handlers a la vista.
export default function RebelRosterContainer() {
  const [roster, _] = useState(rosterInicial);
  const [sideFilter, setSideFilter] = useState("all");
  const [onlyActive, setOnlyActive] = useState(false);

  // Derivamos la lista filtrada sin mutar el origen.
  const rosterFiltrado = useMemo(() => {
    return roster
      .filter((item) =>
        sideFilter === "all" ? true : item.lado === sideFilter
      )
      .filter((item) => (onlyActive ? item.activo : true));
  }, [sideFilter, onlyActive, roster]);

  // Pequeñas estadisticas para mostrar en la vista.
  const stats = useMemo(() => {
    const total = roster.length;
    const activos = roster.filter((item) => item.activo).length;
    return { total, activos, visibles: rosterFiltrado.length };
  }, [rosterFiltrado.length]);

  return (
    <RebelRosterView
      title="Container/Presentational en Star Wars"
      description="El container mantiene estado y logica; las vistas solo reciben props y renderizan."
      roster={rosterFiltrado}
      sideFilter={sideFilter}
      onSideChange={setSideFilter}
      onlyActive={onlyActive}
      onToggleOnlyActive={() => setOnlyActive((prev) => !prev)}
      stats={stats}
    />
  );
}
