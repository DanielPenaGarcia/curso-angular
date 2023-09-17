import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent{

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService){

  }

  addNewCaracteristica(value:string):void{
    this.miServicio.muestraMensaje("Nueva característica: " + value);
    this.caracteristicasEmpleados.emit(value);
  }

}
