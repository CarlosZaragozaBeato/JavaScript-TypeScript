import { Curso } from "../models/curso";

export const LISTA_CURSOS:Curso[] = []

const crsTs = new Curso("Typescript", 8);
const crsPy = new Curso("Python", 22);

LISTA_CURSOS.push(crsTs)
LISTA_CURSOS.push(crsPy)