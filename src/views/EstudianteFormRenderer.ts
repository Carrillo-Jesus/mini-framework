import '../assets/style.css';
import { Estudiante } from '../models/Estudiante';
class EstudianteFormRenderer {
  renderForm(estudiantes: Estudiante[]): void {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    const registerEstudentForm = document.createElement('DIV');
    const h1 = document.createElement('H1');
    h1.textContent = 'Registro de estudiantes';
    registerEstudentForm.appendChild(h1);
    registerEstudentForm.classList.add('container');

    registerEstudentForm.appendChild(this.generarTabla(estudiantes));
    app.appendChild(registerEstudentForm);
    
  }

  generarTabla(estudiantes: Estudiante[]): HTMLElement {
    let divContenedor = document.createElement('DIV');

    let botonCrear = document.createElement('BUTTON');
    botonCrear.textContent = 'Crear';
    botonCrear.className = 'crear boton';
    divContenedor.appendChild(botonCrear);

    // Crear la tabla
    let tabla = document.createElement('TABLE');
    let thead = document.createElement('thead');
    let filaEncabezado = document.createElement('tr');
    let encabezados = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
    encabezados.forEach(function(textoEncabezado) {
        let th = document.createElement('TH');
        th.textContent = textoEncabezado;
        filaEncabezado.appendChild(th);
    });
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    // Crear el cuerpo de la tabla (tbody) y sus filas y celdas
    let tbody = document.createElement('tbody');
    if(estudiantes.length > 0)  {
        estudiantes.forEach(function(estudiante) {
            let fila = document.createElement('tr');
            Object.values(estudiante).forEach(function(valor) {
                let celda = document.createElement('td');
                celda.textContent = valor;
                fila.appendChild(celda);
            });
            let celdaAcciones = document.createElement('td');
            let botonEditar = document.createElement('button');
            botonEditar.textContent = 'Editar';
            botonEditar.className = 'editar';
            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.className = 'eliminar';
            celdaAcciones.appendChild(botonEditar);
            celdaAcciones.appendChild(botonEliminar);
            fila.appendChild(celdaAcciones);
            tbody.appendChild(fila);
        });
    }else {
      let div = document.createElement('DIV');
      div.classList.add('p-2' , 'text-center');
      div.textContent = 'No hay elementos';
      tbody.appendChild(div);
    }
    tabla.appendChild(tbody);
    divContenedor.appendChild(tabla);
    return divContenedor;
  }
}

export const estudianteFormRenderer = new EstudianteFormRenderer();
