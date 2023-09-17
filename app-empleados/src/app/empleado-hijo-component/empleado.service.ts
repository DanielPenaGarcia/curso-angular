import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { ServicioEmpleadosService } from "../servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    empleados:Empleado[] = [
        new Empleado("Daniel", "Peña", "Presidente", 8500),
        new Empleado("Emir", "Borbón", "Director", 5500),
        new Empleado("Oscar", "Minjarez", "Jefe Sección", 3500)
      ]

      constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

      }


      addEmpleado(empleado:Empleado){
        this.empleados.push(empleado);
      }

}