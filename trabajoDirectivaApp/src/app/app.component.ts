import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';
  cargo: string = "";
  entradas: any[];

  constructor() {
    this.entradas = [
      { tittle: "python cada día más presente" },
      { tittle: "Java presente hace más de 20 años" },
      { tittle: "JavaScript cada vez más funcional" },
      { tittle: "Kotlin potencia para tus apps" },
      { tittle: "¿Dónde quédo pascal?" }
    ];
  }


  registrarUsuario() {

    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

  isDirector(): boolean {
    return this.cargo.toLowerCase() === "director";
  }
}
