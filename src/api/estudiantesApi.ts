import { Estudiante } from '../models/Estudiante';
class EstudiantesApi {
  async registrarEstudiante(estudiante: Estudiante): Promise<void> {
    // Lógica para llamar al backend y registrar al estudiante
    console.log('Registrando estudiante:', estudiante);
  }

  async consultarEstudiantes(): Promise< Estudiante [] > {
    try {
      // const response = await fetch('/api/estudiantes');
      // if (!response.ok) {
      //   throw new Error('Error al consultar estudiantes');
      // }
      // const estudiantes = await response.json();
      // console.log('Estudiantes consultados:', estudiantes);
      let estudiantes: Estudiante[] = [
        {nombre: 'John', apellido: 'Doe', edad: 30},
        {nombre: 'Jane', apellido: 'Smith', edad: 25}
    ];

      return estudiantes;
    } catch (error) {
      console.error('Error al consultar estudiantes:', error);
      throw error;
    }
  }
}

export const estudiantesApi = new EstudiantesApi();
