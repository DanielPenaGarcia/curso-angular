import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleado-hijo-component/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de empleados';

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  empleados:Empleado[] = [];

  constructor(private miServicio: ServicioEmpleadosService, private empleadoServicio:EmpleadosService){
    
  }
  ngOnInit(): void {
    this.empleados = this.empleadoServicio.empleados;
  }

  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
    this.empleadoServicio.addEmpleado(nuevoEmpleado);
    this.limpiarCuadros();
  }

  limpiarCuadros(){
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }

  arrayCaracteristicas = [""];

  agregarCaracteristica(value:string){
    this.arrayCaracteristicas.push(value);
  }
}
