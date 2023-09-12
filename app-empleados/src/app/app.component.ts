import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de empleados';

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  empleados:Empleado[] = [
    new Empleado("Daniel", "Peña", "Presidente", 8500),
    new Empleado("Emir", "Borbón", "Director", 5500),
    new Empleado("Oscar", "Minjarez", "Jefe Sección", 3500)
  ]

  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(nuevoEmpleado);
    this.limpiarCuadros();
  }

  limpiarCuadros(){
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }
}
