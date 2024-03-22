import { Estudiante } from '../models/Estudiante';
import { estudiantesApi } from '../api/estudiantesApi';

class EstudianteRepository {
  async registrarEstudiante(estudiante: Estudiante): Promise<void> {
    await estudiantesApi.registrarEstudiante(estudiante);
  }

  async consultarEstudiantes(): Promise<Estudiante[]> {
    const estudiantes = await estudiantesApi.consultarEstudiantes();
    return estudiantes;
  }
}

export const estudianteRepository = new EstudianteRepository();
