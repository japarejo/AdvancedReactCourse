// Árbol de datos para la misión "Asalto a la Estrella de la Muerte".
export const missionPlan = [
  {
    id: "briefing-1",
    type: "briefing",
    titulo: "Asalto a la Estrella de la Muerte",
    comandante: "Mon Mothma",
    descripcion:
      "Destruir la superarma del Imperio antes de que alcance la base rebelde.",
    children: [
      {
        id: "fleet-1",
        type: "fleet",
        nombre: "Escuadra Alianza",
        naves: 38,
        estado: "Listas",
      },
      {
        id: "squad-red",
        type: "squad",
        nombre: "Escuadron Rojo",
        lider: "Luke Skywalker",
        objetivo: "Ataque al puerto de escape",
        children: [
          {
            id: "pilot-1",
            type: "pilot",
            nombre: "Luke Skywalker",
            nave: "X-wing",
            estado: "En cabina",
          },
          {
            id: "pilot-2",
            type: "pilot",
            nombre: "Wedge Antilles",
            nave: "X-wing",
            estado: "Listo",
          },
          {
            id: "task-1",
            type: "task",
            descripcion: "Proteger al líder durante la fase final del ataque",
            prioridad: "alta",
          },
        ],
      },
      {
        id: "squad-gold",
        type: "squad",
        nombre: "Escuadron Oro",
        lider: "Lider Oro",
        objetivo: "Abrir paso a la trinchera",
        children: [
          {
            id: "pilot-3",
            type: "pilot",
            nombre: "Dutch Vander",
            nave: "Y-wing",
            estado: "En formación",
          },
          {
            id: "task-2",
            type: "task",
            descripcion: "Lanzar torpedos hacia el conducto térmico",
            prioridad: "critica",
          },
        ],
      },
      {
        id: "imperial-1",
        type: "intel",
        fuente: "Bothan",
        detalle: "Darth Vader ha despegado; TIE avanzados en camino.",
      },
    ],
  },
];
