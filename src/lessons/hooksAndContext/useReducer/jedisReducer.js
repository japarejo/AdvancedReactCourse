// Reducer y estado inicial para gestionar el Consejo Jedi

export const estadoInicial = [
  { id: 1, nombre: "Luke Skywalker", ladoOscuro: false },
  { id: 2, nombre: "Darth Vader", ladoOscuro: true },
];

export function jedisReducer(state, action) {
  switch (action.type) {
    case "agregar": {
      const nombre = action.payload?.nombre ?? "";
      if (!nombre.trim()) return state;

      const nuevoJedi = {
        id: Date.now(),
        nombre: nombre.trim(),
        ladoOscuro: false,
      };
      return [...state, nuevoJedi];
    }

    case "cambiarLado": {
      const id = action.payload?.id;
      return state.map((jedi) =>
        jedi.id === id
          ? { ...jedi, ladoOscuro: !jedi.ladoOscuro }
          : jedi
      );
    }

    case "eliminar": {
      const id = action.payload?.id;
      return state.filter((jedi) => jedi.id !== id);
    }

    default:
      return state;
  }
}
