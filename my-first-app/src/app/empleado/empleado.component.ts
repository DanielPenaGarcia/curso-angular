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
  empresa = "Google";
  habilitacionCuadro = false;
  usuRegistrado = true; 
  textoDeRegistro = "No hay nadie registrado";

  getRegistradoUsuario(){
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event : Event){
    if((<HTMLInputElement>event.target).value === 'si'){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro = "No hay nadie registrado";
    }
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
