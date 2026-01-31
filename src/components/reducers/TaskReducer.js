import { AGREGAR_CURSO, QUITAR_CURSO } from "../actions/TaskActionTypes";

const CURSOS_INICIALES = [
  { codigo: "MAT101", nombre: "Matemática Básica", nivel: "I", creditos: 3 },
  { codigo: "FIS102", nombre: "Física General", nivel: "I", creditos: 4 },
  { codigo: "QUI103", nombre: "Química", nivel: "I", creditos: 3 },
  {
    codigo: "INF104",
    nombre: "Introducción a la Informática",
    nivel: "I",
    creditos: 2,
  },
  { codigo: "HIS105", nombre: "Historia Universal", nivel: "I", creditos: 2 },
];

const initialState = {
  disponibles: CURSOS_INICIALES,
  seleccionados: [],
};

export default function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_CURSO:
      return {
        ...state,
        disponibles: state.disponibles.filter(
          (c) => c.codigo !== action.payload.codigo,
        ),
        seleccionados: [...state.seleccionados, action.payload],
      };
    case QUITAR_CURSO:
      return {
        ...state,
        seleccionados: state.seleccionados.filter(
          (c) => c.codigo !== action.payload.codigo,
        ),
        disponibles: [...state.disponibles, action.payload],
      };
    default:
      return state;
  }
}
