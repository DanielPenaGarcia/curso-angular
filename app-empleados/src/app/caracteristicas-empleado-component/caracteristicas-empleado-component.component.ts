import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent{

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  addNewCaracteristica(value:string):void{
    this.caracteristicasEmpleados.emit(value);
  }

}
