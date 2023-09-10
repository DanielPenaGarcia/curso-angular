import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{

  nombre = "Juan";
  apellido = "Díaz";
  private edad = 18;
  empresa = "";
  habilitacionCuadro = false;
  usuRegistrado = true; 

  getRegistradoUsuario(){
    this.usuRegistrado = true;
  }

  getEdad(){
    return this.edad;
  }



  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  llamarEmpresa(nombreEmpresa: string): void{
    this.empresa = nombreEmpresa;
  }
  

}
