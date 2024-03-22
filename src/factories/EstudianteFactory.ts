import { Estudiante } from '../models/Estudiante';

class EstudianteFactory {
  createEstudiante(nombre: string, apellido: string, edad: number): Estudiante {
    return new Estudiante(nombre, apellido, edad);
  }
}

export const estudianteFactory = new EstudianteFactory();
