import { AGREGAR_CURSO, QUITAR_CURSO } from "./TaskActionTypes";

export const agregarCurso = (curso) => ({
  type: AGREGAR_CURSO,
  payload: curso,
});

export const quitarCurso = (curso) => ({
  type: QUITAR_CURSO,
  payload: curso,
});
