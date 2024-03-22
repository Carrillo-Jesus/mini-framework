import { estudianteRepository } from '../repositories/EstudianteRepository';
import { estudianteFactory } from '../factories/EstudianteFactory';
import { estudianteFormRenderer } from '../views/EstudianteFormRenderer';

class EstudianteController {
  async handleRegistroEstudiante(nombre: string, apellido: string, edad: number): Promise<void> {
    const nuevoEstudiante = estudianteFactory.createEstudiante(nombre, apellido, edad);
    await estudianteRepository.registrarEstudiante(nuevoEstudiante);
  }

  async mostrarFormularioRegistroEstudiante(): Promise<void> {
    try {
        // Consultar estudiantes desde el repositorio
        const estudiantes = await estudianteRepository.consultarEstudiantes();
        
        // Renderizar la vista con los datos de los estudiantes
        estudianteFormRenderer.renderForm(estudiantes);
    } catch (error) {
        console.error('Error al mostrar estudiantes:', error);
        // Manejar el error adecuadamente
    }
}
}

export const estudianteController = new EstudianteController();
